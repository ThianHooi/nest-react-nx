import { gql } from '@apollo/client';

export const ADD_ORDER = gql`
  mutation createOrder($user: Float!, $input: [OrderProductInput!]) {
    createOrder(input: { user: $user, orderItems: $input }) {
      id
      status
      price
      user {
        name
        id
      }
      orderProducts {
        id
        quantity
        unitPrice
        totalPrice
        productId {
          name
          imageUrl
        }
      }
    }
  }
`;
