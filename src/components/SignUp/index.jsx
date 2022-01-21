import React from 'react';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from '../FormikTextInput/FormikTextInput';
import theme from '../../theme';
import * as Yup from 'yup';
import useSignIn from '../../hooks/useSignIn';
import useSignUp from '../../hooks/useSignUp';
import { useNavigate } from "react-router-dom";

const initialValues = {
  password: '',
  username: '',
  confirmPassword: ''

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
  username: Yup.string()
    .min(1, 'Username Short!')
    .max(30, 'Username Long!')
    .required('Username is required'),
  password: Yup.string()
    .min(5, 'Password Short!')
    .max(50, 'Password Long!')
    .required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords do not match',
  ),
});

const SignUpForm = ({ onSubmit }) => {
 
  return (
    <View style={styles.form}>
      <FormikTextInput  name="username" placeholder="Username" />
      <FormikTextInput  name="password" placeholder="Password" secureTextEntry={true} />
      <FormikTextInput  name="confirmPassword" placeholder="Password confirmation" secureTextEntry={true} />
      <Pressable onPress={onSubmit} >
        <Text style={styles.button}>Sign up</Text>
      </Pressable>
    </View>
  );
};

 export const SignUpContainer = ({ onSubmit }) => {

  return (
    <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
 };


const SignUp = () => {
  
  const [signIn ] = useSignIn();
  const [signUp ] = useSignUp();
  let navigate = useNavigate();

  const onSubmit = async (values) => {

    const { username, password } = values;
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate("/", { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  return < SignUpContainer onSubmit={ onSubmit } />
};

export default SignUp;