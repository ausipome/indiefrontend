import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Link from 'next/link';
import { CURRENT_USER_QUERY, useUser } from './User';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

export default function AddToCart({ id }) {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  const me = useUser();
  if (!me)
    return (
      <Link href="/SignIn">
        <button type="button" style={{ fontSize: '1.15em' }}>
          Login to Add To Cart 🛒
        </button>
      </Link>
    );
  return (
    <button
      disabled={loading}
      type="button"
      onClick={addToCart}
      style={{ fontSize: '1.15em' }}
    >
      Add{loading && 'ing'} To Cart 🛒
    </button>
  );
}
