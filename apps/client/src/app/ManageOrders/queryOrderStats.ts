import { gql } from '@apollo/client';

export const QUERY_SELLER_ORDER_STATS = gql`
  query orderAggregate {
    orderAggregate {
      sum {
        price
      }
      count {
        id
      }
    }
  }
`;
