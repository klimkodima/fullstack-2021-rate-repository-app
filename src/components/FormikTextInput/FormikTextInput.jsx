import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../../theme';

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  const styles = StyleSheet.create({
    errorText: {
      marginTop: 5,
      marginLeft: 20,
      color: '#d73a4a',
    },
    field: {
      marginHorizontal: 20,
      marginVertical: 10,
      borderRadius: 5,
      borderColor: (showError ? '#d73a4a' : theme.colors.textSecondary),
      padding: 20,
      borderWidth: 2,
    },
  });

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={styles.field}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;