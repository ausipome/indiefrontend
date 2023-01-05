import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import { USER_ORDERS_QUERY } from '../pages/orders';
import { ALL_PRODUCTS_QUERY } from './Products';
import { ALL_PRODUCTS_QUERY_SELL } from './ProductsSell';
import { ALL_PRODUCTS_QUERY_SOLD } from './ProductsSold';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

export default function SignOut() {
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [
      { query: CURRENT_USER_QUERY },
      CURRENT_USER_QUERY,
      { query: ALL_PRODUCTS_QUERY_SOLD },
      ALL_PRODUCTS_QUERY_SOLD,
      { query: ALL_PRODUCTS_QUERY_SELL },
      ALL_PRODUCTS_QUERY_SELL,
      { query: ALL_PRODUCTS_QUERY },
      ALL_PRODUCTS_QUERY,
      { query: USER_ORDERS_QUERY },
      USER_ORDERS_QUERY,
    ],
  });
  return (
    <a id="logOut" type="button" onClick={signout} style={{ color: '#0077a0' }}>
      Log-out
    </a>
  );
}
