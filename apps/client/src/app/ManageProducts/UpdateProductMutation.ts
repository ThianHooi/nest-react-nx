import { gql } from '@apollo/client';

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $name: String
    $description: String
    $price: Float
    $isAvailable: Boolean
    $id: ID!
  ) {
    updateOneProduct(
      input: {
        id: $id
        update: {
          name: $name
          price: $price
          isAvailable: $isAvailable
          description: $description
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
