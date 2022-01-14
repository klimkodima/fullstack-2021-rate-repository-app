import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';

const styles = StyleSheet.create({
    tab:{
      paddingTop: Constants.statusBarHeight,
      color: theme.colors.appBarText,
      fontSize: theme.fontSizes.subheading,
      marginTop: 20,
      padding: 10,
     }
  });
  
const AppBarTab = ({text}) => {
  return (
    <Pressable>
      <Text style={styles.tab}>{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;