import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(where: { id: $id }) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteProduct));
}

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { loading, error }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      variables: { id },
      update,
    }
  );
  return (
    <button
      style={{
        fontSize: '1.15em',
        background: 'white',
        color: 'red',
        borderRadius: '5px',
      }}
      type="button"
      disabled={loading}
      onClick={() => {
        if (confirm('Are you sure you want to delete this item?')) {
          // go ahead and delete it
          Router.push({
            pathname: `/products`,
          });
          deleteProduct();
        }
      }}
    >
      {children}
    </button>
  );
}
