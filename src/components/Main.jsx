import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn/SignIn';

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
        <Route path="/" element={<RepositoryList exact/>} />
        <Route path="/signin" element={<SignIn/>} exact/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;