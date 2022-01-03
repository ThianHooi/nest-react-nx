import { gql } from '@apollo/client';

export const QUERY_PRODUCT = gql`
  query products($isAvailable: Boolean!, $offset: Int, $excludeId: ID) {
    products(
      filter: { isAvailable: { is: $isAvailable }, id: { neq: $excludeId } }
      paging: { limit: 16, offset: $offset }
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
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
    }
  }
`;
