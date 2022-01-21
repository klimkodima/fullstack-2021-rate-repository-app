import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { SignInContainer } from '../../components/SignIn'


describe('SignInContainer',  () => {
  describe('SignInForm',  () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
     
      const onSubmit = jest.fn();
      const { getByPlaceholderText, getByText } = render(<SignInContainer onSubmit={onSubmit} />);
       
      fireEvent.changeText(getByPlaceholderText('UserName'), 'kalle');
      fireEvent.changeText(getByPlaceholderText('Password'), 'password');
      fireEvent.press(getByText('Sign in'));
      await act(async () => await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1) ));
      await act(async () => await waitFor(() => {
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
               
        }); 
      }));   
    });
  });
});