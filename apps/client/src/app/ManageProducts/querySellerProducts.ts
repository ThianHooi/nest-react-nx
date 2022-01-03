import { gql } from '@apollo/client';

export const QUERY_SELLER_PRODUCT = gql`
  query adminProducts($offset: Int) {
    products(
      paging: { limit: 10, offset: $offset }
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
        isAvailable
        created
        updated
      }
    }
  }
`;
