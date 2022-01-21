import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import theme from '../theme';
import  Loader  from './Loader';
import { useQuery, useMutation } from '@apollo/client';
import ReviewItem from './ReviewItem';
import { GET_CURRENT_USER } from '../graphql/queries';
import { DELETE_REVIEW } from '../graphql/mutation';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.textSecondary,
  },
   row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const MyReviewsList = () => {
  const [ deleteReview ] = useMutation(DELETE_REVIEW); 
  const { loading, data, fetchMore, refetch } = useQuery(GET_CURRENT_USER, {
    variables: { 
      includeReviews: true
      },
  });
  
  if (loading) return (<Loader/>);
  
  const reviews = data.me.reviews
    ? data.me.reviews.edges.map((edge) => edge.node)
    : [];

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }
    fetchMore();
  }; 

  const handleDeleteReview = async (id) => {
    await deleteReview({
      variables: {
        deleteReviewId: id
      }  
    });
    refetch();
  }; 

  return (
    <FlatList
      ItemSeparatorComponent={ () => <View style={styles.separator}/>}
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} deleteReview={() =>handleDeleteReview(item.id)} showFooter= {true}/> }
      keyExtractor={({ id }) => id}
      onEndReached={handleFetchMore}
      onEndReachedThreshold={0.5}
    />
  );
};

export default MyReviewsList;