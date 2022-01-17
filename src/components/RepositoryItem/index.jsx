import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import Details from './Details';
import theme from '../../theme';

const RepositoryItem = ({ item }) => {

  const styles = StyleSheet.create({
    item: {
      marginBottom: 10,
    },
    flexContainer: {
      flexDirection: "row",
    },
    language: {
      backgroundColor: theme.colors.textSecondary,
    },
    infornation: {

      fontSize: theme.fontSizes.body,
      fontWeight: theme.fontWeights.bold,
      flexGrow: 'wrap',
    },
    name: {
      fontSize: theme.fontSizes.subheading,
      fontWeight: theme.fontWeights.bold,
      padding: 5,
    },
    button:{
      backgroundColor: theme.colors.button,
      borderRadius: 5,
      color: theme.colors.appBarText,
      padding: 5,
      maxWidth: 'fit-content',
    },
    description:{
      padding: 5,
    }
  });

  return (
    <View>
      <View style={styles.flexContainer}>
        <Avatar style={styles.avatar} avatarUrl={item.ownerAvatarUrl} />
        <View style={styles.infornation}>
          <Text style={styles.name}> {item.fullName}</Text>
          <Text style={styles.description}> {item.description}</Text>
          <Text style={styles.button}> {item.language}</Text>
        </View>
      </View>
      <Details item={item}/>
    </View>
  );
};

export default RepositoryItem;