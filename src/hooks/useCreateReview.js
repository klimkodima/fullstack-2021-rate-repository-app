import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutation';

const useCreateReview = () => {

  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    rating= parseInt(rating);
    await mutate({ variables: { ownerName, repositoryName, rating, text } });
  };

  return [createReview, result];
};

export default useCreateReview;