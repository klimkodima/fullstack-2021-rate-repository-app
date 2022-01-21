import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateReview from './CreateReview';
import SingleRepository from './SingleRepository';
import MyReviewsList from './MyReviewsList'
import Constants from 'expo-constants';

const Main = () => {

  const styles = StyleSheet.create({
    container: {
      marginTop: Constants.statusBarHeight,
      flexGrow: 1,
      flexShrink: 1,
     
    },
  });

  return (
    <View style={styles.container}>
      <AppBar/>
      <Routes>
        <Route path="/" element={<RepositoryList  exact/>} />
        <Route path="/signin" element={<SignIn/>} exact/>
        <Route path="/info" element={<SingleRepository/>} exact/>
        <Route path="/createreview" element={<CreateReview/>} exact/>
        <Route path="/signup" element={<SignUp/>} exact/>
        <Route path="/myreviews" element={<MyReviewsList/>} exact/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;