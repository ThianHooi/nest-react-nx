import { gql } from '@apollo/client';

export const QUERY_SINGLE_PRODUCT = gql`
  query product($productId: ID!) {
    product(id: $productId) {
      id
      name
      price
      description
      imageUrl
      user {
        name
        id
      }
    }
  }
`;
