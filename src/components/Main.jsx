import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Route, Routes } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar/AppBar';
import theme from '../theme';
import SignIn from './SignIn';

const Main = () => {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.mainBackground,
      flexGrow: 1,
      flexShrink: 1,
    },
  });

  return (
    <View style={styles.container} >
      <AppBar/>
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </View>
  );
};

export default Main;