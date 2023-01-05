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

const UPDATE_ORDER_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION($id: ID!) {
    updateOrderFlagged(id: $id, status: "FLAGGED") {
      id
    }
  }
`;
export default function Flagged({ id, children }) {
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
        if (
          confirm(
            'If you raise an issue with this item (item has not arrived, not as described, damaged etc), payment to the seller will be withheld until the issue is resolved.\n\nIf you raise an issue, please contact the seller directly to resolve the issue.\n\nPlease confirm you wish to raise an issue with this item?'
          )
        ) {
          updateOrderItem().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </ButtonStyles>
  );
}
