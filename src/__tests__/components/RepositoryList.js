import React from 'react';
import { RepositoryListContainer } from '../../components/RepositoryList';
import { roundNumber } from '../../utils/roundNumber';
import { render } from '@testing-library/react-native';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      it('renders repository information correctly', () => {
        const repositories = {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };
        
        const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories}/>);
        const repositoryItems = getAllByTestId('repositoryItem');
        const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
        const stargazersCount = getAllByTestId("stargazersCount");
        const forksCount = getAllByTestId("forksCount");
        const reviewCount = getAllByTestId("reviewCount");
        const ratingAverage = getAllByTestId("ratingAverage");

        expect(firstRepositoryItem).toHaveTextContent(repositories.edges[0].node.fullName);
        expect(firstRepositoryItem).toHaveTextContent(repositories.edges[0].node.description);
        expect(firstRepositoryItem).toHaveTextContent(repositories.edges[0].node.language);
        expect(reviewCount[0]).toHaveTextContent(repositories.edges[0].node.reviewCount);
        expect(ratingAverage[0]).toHaveTextContent(repositories.edges[0].node.ratingAverage); 
        expect(forksCount[0]).toHaveTextContent(roundNumber(repositories.edges[0].node.forksCount));
        expect(stargazersCount[0]).toHaveTextContent(roundNumber(repositories.edges[0].node.stargazersCount));

        expect(secondRepositoryItem).toHaveTextContent(repositories.edges[1].node.fullName);
        expect(secondRepositoryItem).toHaveTextContent(repositories.edges[1].node.description);
        expect(secondRepositoryItem).toHaveTextContent(repositories.edges[1].node.language);
        expect(reviewCount[1]).toHaveTextContent(repositories.edges[1].node.reviewCount);
        expect(ratingAverage[1]).toHaveTextContent(repositories.edges[1].node.ratingAverage); 
        expect(forksCount[1]).toHaveTextContent(roundNumber(repositories.edges[1].node.forksCount));
        expect(stargazersCount[1]).toHaveTextContent(roundNumber(repositories.edges[1].node.stargazersCount));


       


      });
    });
  });