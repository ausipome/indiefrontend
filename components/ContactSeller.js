import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';
import { ALL_PRODUCTS_QUERY_SOLD } from './ProductsSold';

const ButtonStyles = styled.button`
  width: auto;
  background: #fde6ff;
  color: #015268;
  border: thin solid #000000;
  font-size: 2rem;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
`;

const UPDATE_ORDER_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION($id: ID!) {
    updateOrderFlagged(id: $id, status: "FLAGGED") {
      id
    }
  }
`;
export default function ContactSeller({ id, children }) {
  const [updateOrderItem, { loading, error }] = useMutation(
    UPDATE_ORDER_MUTATION,
    {
      variables: { id },
      refetchQueries: [
        { query: ALL_PRODUCTS_QUERY_SOLD },
        'ALL_PRODUCTS_QUERY_SOLD',
      ],
    }
  );
  return (
    <ButtonStyles
      style={{
        fontSize: '1.2em',
      }}
      type="button"
      disabled={loading}
      onClick={() => {
        if (confirm('Please confirm you raise an issue with this item?')) {
          updateOrderItem().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </ButtonStyles>
  );
}
