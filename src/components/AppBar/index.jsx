import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/queries';

const styles = StyleSheet.create({
  container: {
    fontSize: theme.fontSizes.subheading,
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor: theme.colors.textPrimary,
  },
});

const AppBar = () => {

  const { data } = useQuery(GET_CURRENT_USER);
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
    },
    { 
      name:'Create a review',
      link:'createreview'
    },
    { 
      name:'Sign Up',
      link:'signup'
    },
    { 
      name:'My reviews',
      link:'myreviews'
    },
 ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab nav={nav[0]}/>
        { data?.me?.id 
          ? <>
              <AppBarTab nav={nav[3]}/>
              <AppBarTab nav={nav[5]}/>
              <AppBarTab nav={nav[2]} />
            </>
          : 
            <>
              <AppBarTab nav={nav[1]}/>
              <AppBarTab nav={nav[4]}/>
            </>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;