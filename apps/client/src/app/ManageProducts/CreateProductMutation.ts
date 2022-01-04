import { gql } from '@apollo/client';

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: String
    $description: String
    $price: Float
    $isAvailable: Boolean
    $imageUrl: String
    $user: Float!
  ) {
    createOneProduct(
      input: {
        product: {
          name: $name
          price: $price
          isAvailable: $isAvailable
          description: $description
          imageUrl: $imageUrl
          user: $user
          type: "tech"
        }
      }
    ) {
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
`;
