import { gql } from '@apollo/client';

export const QUERY_SELLER_ORDER = gql`
  query orders($offset: Int) {
    orders(paging: { limit: 10, offset: $offset }) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        price
        created
        user {
          id
          name
          email
        }
        orderProducts {
          id
          quantity
          unitPrice
          totalPrice
          productId {
            id
            price
            name
            description
            imageUrl
            isAvailable
          }
        }
      }
    }
  }
`;
