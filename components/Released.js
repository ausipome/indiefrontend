import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';
import { ALL_PRODUCTS_QUERY_SOLD } from './ProductsSold';

const ButtonStyles = styled.button`
  width: auto;
  background: white;
  color: green;
  border: thin solid #000000;
  font-size: 1.2em;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
`;

const RELEASE_MUTATION = gql`
  mutation RELEASE_MUTATION($id: ID!) {
    released(id: $id) {
      id
    }
  }
`;
export default function Released({ id, children }) {
  const [released, { loading, error }] = useMutation(RELEASE_MUTATION, {
    variables: { id },
    refetchQueries: [
      { query: ALL_PRODUCTS_QUERY_SOLD },
      'ALL_PRODUCTS_QUERY_SOLD',
    ],
  });
  return (
    <ButtonStyles
      style={{
        fontSize: '1.2em',
        marginTop: '12px',
      }}
      type="button"
      disabled={loading}
      onClick={() => {
        if (
          confirm(
            'You are about to release the funds for this item into your Indie Bubba account.\n\nThe funds will then be paid out to your nominated bank account and arrive in the next few days.'
          )
        ) {
          released().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </ButtonStyles>
  );
}
