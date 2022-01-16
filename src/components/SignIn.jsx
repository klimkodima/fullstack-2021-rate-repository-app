import React from 'react';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput/FormikTextInput';
import theme from '../theme';
import * as Yup from 'yup';

const initialValues = {
  password: '',
  userName: '',
};

const styles = StyleSheet.create({
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

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Username Short!')
    .max(50, 'Username Long!')
    .required('Username is required'),
  password: Yup.string()
    .min(2, 'Password Short!')
    .max(50, 'Password Long!')
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
 
  return (
    <View style={styles.form}>
      <FormikTextInput  name="userName" placeholder="UserName" />
      <FormikTextInput  name="password" placeholder="Password" secureTextEntry={true} />
      <Pressable onPress={onSubmit}>
        <Text style={styles.button}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;