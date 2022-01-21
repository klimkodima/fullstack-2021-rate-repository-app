import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS, REVIEW_DETAILS, USER_DETAILS } from './fragments'

export const GET_REPOSITORIES = gql`
query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $after: String, $first: Int) {
  repositories( orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, after: $after, first: $first){
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
    edges {
      node {
        ...RepositoryDetails
      }
      cursor
    }
  }
}
${REPOSITORY_DETAILS}
`;

export const GET_CURRENT_USER = gql`
query getCurrentUser($includeReviews: Boolean = false) {
  me {
    ...UserDetails
    reviews @include(if: $includeReviews) {
      edges {
         node {
          ...ReviewDetails
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
}
${USER_DETAILS}
${REVIEW_DETAILS}
`;

export const GET_REPOSITORY = gql`
query get($id: ID!, $after: String, $first: Int)  {
  repository(id: $id) {
    url
    reviews(after: $after, first: $first) {
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
      edges {
        node {
          ...ReviewDetails
        }
         cursor
      }
    }
      ...RepositoryDetails 
  }
}
${REPOSITORY_DETAILS}
${REVIEW_DETAILS}
${USER_DETAILS}
`
