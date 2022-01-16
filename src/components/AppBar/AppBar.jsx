import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor: theme.colors.textPrimary,
  },
});

const AppBar = () => {

  const nav =[
     {
        name:'Repositories',
        link: '/',
   },
    { 
       name:'SignIn',
       link:'signin'
     } ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
       <AppBarTab nav={nav[0]}/>
       <AppBarTab nav={nav[1]}/>
      </ScrollView>
    </View>
  );
};

export default AppBar;