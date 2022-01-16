import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import theme from '../../theme';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    tab:{
      color: theme.colors.appBarText,
      fontSize: theme.fontSizes.subheading,
      margin:5,
      padding: 10,
     }
  });
  
const AppBarTab = ({ nav }) => {
  return (
    <Pressable>
      <Link to={nav.link}><Text style={styles.tab}>{nav.name}</Text></Link>
    </Pressable>
  );
};

export default AppBarTab;