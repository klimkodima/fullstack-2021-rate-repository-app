import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import { Button } from 'react-native-elements';
import  Loader  from './Loader';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';
import {useLocation} from 'react-router-dom';
import * as Linking from 'expo-linking';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.textSecondary,
  },
  button:{
    backgroundColor: theme.colors.button,
    color: theme.colors.appBarText,
    marginHorizontal:15,
    fontWeight:theme.fontWeights.bold,
    borderRadius: 5,
    textTransform: 'none',
    marginBottom: 10
  },
});

const RepositoryInfo = ({repository}) => {
  
  return (
    <>
      <RepositoryItem item={repository}/>
      <Button title={'Open in Github'} buttonStyle={styles.button} onPress={() =>{Linking.openURL(repository.url)}} />
      <View style={styles.separator}/>
    </> 
  );
};

const SingleRepository = () => {

  const location = useLocation();
  const { loading, data, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { 
      id: location.state.repositoryId,
      first: 2,
      after: data?.repositories.pageInfo.endCursor, 
      },
  });
  
  if (loading) return <Loader/>;
  
  const reviews = data.repository.reviews
    ? data.repository.reviews.edges.map((edge) => edge.node)
    : [];

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore();
  };  

  return (
    <FlatList
      ItemSeparatorComponent={ () => <View style={styles.separator}/>}
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ListHeaderComponent={() => <RepositoryInfo repository={data.repository} />}
      keyExtractor={({ id }) => id}
      onEndReached={handleFetchMore}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;