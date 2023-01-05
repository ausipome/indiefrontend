import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';
import { ALL_PRODUCTS_QUERY_SOLD } from './ProductsSold';

const ButtonStyles = styled.button`
  width: auto;
  background: white;
  color: red;
  border: thin solid #000000;
  font-size: 1.2em;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  margin-right: 7px;
`;

const REFUND_MUTATION = gql`
  mutation REFUND_MUTATION($id: ID!) {
    refund(id: $id) {
      id
    }
  }
`;
export default function Refund({ id, children }) {
  const [refund, { loading, error }] = useMutation(REFUND_MUTATION, {
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
            'Please confirm you wish to refund this item?\n\nTHIS CAN NOT BE UNDONE!'
          )
        ) {
          refund().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </ButtonStyles>
  );
}
