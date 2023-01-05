import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { SINGLE_ORDER_QUERY } from '../pages/order/[id]';
import DisplayError from './ErrorMessage';

const ButtonStyles = styled.button`
  width: auto;
  background: white;
  color: green;
  border: thin solid #000000;
  font-size: 1.2em;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  margin-right: 7px;
`;

const UPDATE_ORDER_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION($id: ID!) {
    updateOrderReceived(id: $id, status: "RECEIVED") {
      id
    }
  }
`;
export default function Received({ id, children }) {
  const [updateOrderItem, { loading, error }] = useMutation(
    UPDATE_ORDER_MUTATION,
    {
      variables: { id },
      refetchQueries: [{ query: SINGLE_ORDER_QUERY }, 'SINGLE_ORDER_QUERY'],
    }
  );
  return (
    <ButtonStyles
      type="button"
      disabled={loading}
      onClick={() => {
        if (
          confirm(
            'Please confirm you have received this item and are happy for the seller to be paid?'
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
