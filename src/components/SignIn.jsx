import React from 'react';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import * as yup from 'yup';

const initialValues = {
  password: '',
  userName: '',
};

const styles = StyleSheet.create({
  
  field: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    borderColor: theme.colors.textSecondary,
    paddingLeft: 20,
    borderWidth: 2,
  },
  button:{
    backgroundColor: theme.colors.button,
    borderRadius: 5,
    color: theme.colors.appBarText,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
  form: {
    marginTop: 16,
  },
});

const SignInForm = ({ onSubmit }) => {
 
  return (
    <View style={styles.form}>
      <FormikTextInput style={styles.field} name="userName" placeholder="UserName" />
      <FormikTextInput style={styles.field} name="password" placeholder="Password" secureTextEntry={true} />
      <Pressable onPress={onSubmit}>
        <Text style={styles.button}>Sign in</Text>
      </Pressable>
    </View>
  );

};


const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  };;

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;