import { gql } from '@apollo/client';

export const QUERY_PRODUCT = gql`
  query products(
    $isAvailable: Boolean!
    $offset: Int
    $excludeId: ID
    $name: String
    $lowerPrice: Float
    $upperPrice: Float
  ) {
    products(
      filter: {
        isAvailable: { is: $isAvailable }
        id: { neq: $excludeId }
        name: { like: $name }
        and: [{ price: { gte: $lowerPrice } }, { price: { lte: $upperPrice } }]
      }
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
