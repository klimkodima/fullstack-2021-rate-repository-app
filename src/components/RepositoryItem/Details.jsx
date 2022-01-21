import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import theme from '../../theme';
import { roundNumber } from '../../utils/roundNumber'

const Details = ({ item }) => {

  return (
    <View style={styles.row}>
      <View style={styles.block}>
        <Text style={styles.number} testID='stargazersCount' >{roundNumber(item.stargazersCount)}</Text>
        <Text>Stars</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.number} testID='forksCount' >{roundNumber(item.forksCount)}</Text>
        <Text>Forks</Text>  
      </View>
      <View style={styles.number} style={styles.block}>
        <Text style={styles.number} testID='reviewCount' >{item.reviewCount}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.number} testID='ratingAverage' >{item.ratingAverage}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: "space-around",
    },
    column: {
      flex: 1,
    },
    number: {
      fontSize: theme.fontSizes.subheading,
      fontWeight: theme.fontWeights.bold,
    }
  });

export default Details;