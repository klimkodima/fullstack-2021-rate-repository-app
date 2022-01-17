import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client'

const useRepositories = () => {

  const [repositories, setRepositories] = useState();
  
  const { data, loading } = useQuery(GET_REPOSITORIES);
    useEffect(()=>{
      if(data){
        setRepositories(data.repositories)
      }
    },
     [data]
    )

  return { repositories, loading };
};

export default useRepositories;