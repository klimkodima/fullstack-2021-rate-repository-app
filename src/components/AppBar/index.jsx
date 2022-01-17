import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../graphql/queries';
import  SignOutButton  from './SignOutButton'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor: theme.colors.textPrimary,
  },
});

const AppBar = () => {

  const { data } = useQuery(GET_USER);

  const nav =[
     {
        name:'Repositories',
        link: '/',
   },
    { 
       name:'SignIn',
       link:'signin'
     },
     { 
      name:'SignOut',
      link: '/'
    }
 ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
       <AppBarTab nav={nav[0]}/>
       {data?.me?.id ? <SignOutButton nav={nav[2]} /> : <AppBarTab nav={nav[1]}/>}
      </ScrollView>
    </View>
  );
};

export default AppBar;