import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.textPrimary,
    paddingBottom: 5,
  },
});

const AppBar = () => {

  const nav =['Repositories', 'SignIn'];
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/"><AppBarTab text={nav[0]}/></Link>
        <Link to="/signin"><AppBarTab text={nav[1]}/></Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
