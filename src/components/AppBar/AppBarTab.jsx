import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import theme from '../../theme';
import { Link } from "react-router-native";
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../../hooks/useAuthStorage';

const styles = StyleSheet.create({
    tab:{
      color: theme.colors.appBarText,
      fontSize: theme.fontSizes.subheading,
      margin:5,
      padding: 10,
     }
  });
  
const AppBarTab = ({ nav }) => {

  const client = useApolloClient();
  const authStorage = useAuthStorage();

  const signOut = async () => {
    await authStorage.removeAccessToken();
     client.resetStore();
  };

  return (
     nav.link ? 
     ( <Link to={nav.link}><Text style={styles.tab}>{nav.name}</Text></Link> ) : 
     (
      <Pressable onPress={signOut}>
      <Text style={styles.tab}>{nav.name}</Text>
     </Pressable>
     )
  );
};

export default AppBarTab;