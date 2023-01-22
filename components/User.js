import { gql, useQuery } from '@apollo/client';

export const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        stripeId
        confirmed
        address
        address2
        town
        county
        postcode
        cart {
          id
          quantity
          product {
            user {
              id
            }
            email
            id
            price
            name
            description
            photo {
              id
              image {
                publicUrlTransformed
              }
            }
          }
        }
      }
    }
  }
`;

export function useUser() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
}
