import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client'

const useRepositories = ({ orderBy, searchKeyword, first }) => {
  let variables;
  switch ( orderBy) {
    case 'DESC':
      variables = {
        orderBy:'RATING_AVERAGE',
        orderDirection: 'DESC',
        searchKeyword,
        first
      }
      break;
    case 'ASC':
      variables = {
        orderBy:'RATING_AVERAGE',
        orderDirection: 'ASC',
        searchKeyword,
        first
      }
      break;
    default:
      variables = {
        orderBy: 'CREATED_AT',
        orderDirection: 'DESC',
        searchKeyword,
        first
      }
      break;
  }

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES,
    { fetchPolicy: "cache-and-network",
     variables
    });
  
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.repositories.pageInfo.endCursor,
      },
    });
  };


  return { repositories: data?.repositories, loading, fetchMore: handleFetchMore, ...result };
};

export default useRepositories;