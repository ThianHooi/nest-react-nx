import { gql } from '@apollo/client';

export const QUERY_PRODUCT = gql`
  query products($isAvailable: Boolean!) {
    products(filter: { isAvailable: { is: $isAvailable } }) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          id
          name
          description
          imageUrl
          price
          user {
            id
            name
          }
          created
          updated
        }
        cursor
      }
    }
  }
`;
