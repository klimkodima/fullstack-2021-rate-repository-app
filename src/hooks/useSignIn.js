import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutation';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {

  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN);
  const client = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    await authStorage.setAccessToken(data.authenticate.accessToken);
    client.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;