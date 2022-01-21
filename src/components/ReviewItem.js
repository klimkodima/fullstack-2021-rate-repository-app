import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import theme from '../theme';
import { Button } from 'react-native-elements';
import { useNavigate } from "react-router-dom";
import { formatDate } from '../utils/formatDate';

const styles = StyleSheet.create({
  flexContainer: {
    fontSize:theme.fontSizes.body,
    color: theme.colors.textPrimary,
    padding: 10,
  },
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
  deleteButton:{
    backgroundColor: 'red',
    color: theme.colors.appBarText,
    marginRight:60,
    fontWeight:theme.fontWeights.bold,
    borderRadius: 5,
    textTransform: 'none',
    marginBottom: 10
  },
  ratingContainer: {
    width: 50,
    height: 50,
  },
  rating: {
    borderColor: theme.colors.button,
    width: 45,
    height: 45,
    borderStyle:'solid',
    borderWidth:2,
    borderRadius:45/2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    color: theme.colors.button,
    fontWeight:theme.fontWeights.bold,
  },
  row: {
    flexDirection: 'row',
    flexShrink: 2,
  },
  column: {
    flexDirection: 'column',
    flexShrink: 2,
  },
  name: {
    fontWeight: theme.fontWeights.bold,
    paddingVertical: 5,
  },
  createdAt:{
    color: theme.colors.textSecondary,
  },
});


const ReviewItem = ({ review, deleteReview,  showFooter = false }) => {
  
  let navigate = useNavigate();

  const confirmDelete = () => {
        Alert.alert(
            'Delete review',
            'Are you sure you want to delete this review?',
            [{
                text: 'CANCEL',
                style: 'cancel'
            },{
                text: 'DELETE',
                onPress: deleteReview,
            }]
        );
    };

  return (
    <View style={styles.flexContainer}>
      <View style={styles.row}>
        <View style={styles.ratingContainer} >
          <View style={styles.rating} >
            <Text style={styles.ratingText}> {review.rating}</Text>
          </View>
        </View>
        <View style={styles.column}>
          <Text style={styles.name}> {review.user.username}</Text>
          <Text style={styles.createdAt}> { formatDate(review.createdAt) }</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.ratingContainer}/>
        <Text> {review.text}</Text>
      </View>
       {showFooter &&
          ( <View style={styles.row}>
              <Button title={'View repository'} buttonStyle={styles.button} onPress={() => navigate("/info", {state:{repositoryId: review.repositoryId}})} />
              <Button title={'Delete review'} buttonStyle={styles.deleteButton} onPress={confirmDelete} />
            </View>
          )}
    </View>
  );
};

export default ReviewItem;