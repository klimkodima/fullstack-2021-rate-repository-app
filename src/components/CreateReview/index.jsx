import React from 'react';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from '../FormikTextInput/FormikTextInput';
import theme from '../../theme';
import * as Yup from 'yup';
import useCreateReview from '../../hooks/useCreateReview';
import { useNavigate } from "react-router-dom";

const initialValues = {
  repositoryName: '',
  ownerName: '',
  rating: '',
  text: ''
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
  ownerName: Yup.string()
    .required('Repository owner name is required'),
    repositoryName: Yup.string()
    .required('Repository name is required'),
  rating: Yup.number()
    .min(0)
    .max(100)
    .required('rating is required'),
});

const ReviewForm = ({ onSubmit }) => {
 
  return (
    <View style={styles.form}>
      <FormikTextInput  name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput  name="repositoryName" placeholder="Repository name"/>
      <FormikTextInput  name="rating" placeholder="Rating been 0 and 100"/>
      <FormikTextInput multiline="true" name="text" placeholder="Review"/>
      <Pressable onPress={onSubmit} >
        <Text style={styles.button}>Create a review</Text>
      </Pressable>
    </View>
  );
};

 export const ReviewContainer = ({ onSubmit }) => {

  return (
    <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
 };


const CreateReview = () => {
  
  const [createReview ] = useCreateReview();
  let navigate = useNavigate();

  const onSubmit = async (values) => {

    const { ownerName, repositoryName, rating, text } = values;
    try {
      const { createReview }= await createReview({ ownerName, repositoryName, rating, text });
      navigate("/info", {state:{repositoryId: createReview.repositoryId}})
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewContainer onSubmit={ onSubmit }/>
};

export default CreateReview;