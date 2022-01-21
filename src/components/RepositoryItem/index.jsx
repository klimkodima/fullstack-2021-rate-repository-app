import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Avatar from './Avatar';
import Details from './Details';
import theme from '../../theme';

const RepositoryItem = ({ item }) => {

  const styles = StyleSheet.create({
    flexContainer: {
      flexDirection: "row",
      fontSize: theme.fontSizes.body,
      paddingTop: 5,
    },
    infornation: {
      flexShrink: 2,
    },
    name: {
      fontWeight: theme.fontWeights.bold,
    },
    language:{
      backgroundColor: theme.colors.button,
      borderRadius: 5,
      color: theme.colors.appBarText,
      padding: 5,
      maxWidth: 'fit-content'
    },
    buttonsWrapper:{
      padding: 10,
    },
    description:{
      padding: 5,
    }
  });

  return (
    <View testID="repositoryItem">
      <View style={styles.flexContainer}>
        <Avatar avatarUrl={item.ownerAvatarUrl} />
        <View style={styles.infornation}>
          <Text style={styles.name}> {item.fullName}</Text>
          <Text style={styles.description} > {item.description}</Text>
          <Text style={styles.language}> {item.language}</Text>
        </View>
      </View>
      <Details item={item}/>
    </View>
  );
};

export default RepositoryItem;