import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(where: { id: $id }) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  console.log(payload);
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
        borderLeft: 'solid thin #eeeeee',
        borderBottomRightRadius: '15px',
        fontSize: '1em',
      }}
      type="button"
      disabled={loading}
      onClick={() => {
        if (confirm('Are you sure you want to delete this item?')) {
          // go ahead and delete it
          deleteProduct().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </button>
  );
}
