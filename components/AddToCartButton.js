import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';
import { CURRENT_USER_QUERY, useUser } from './User';

const ButtonSpan = styled.button`
  & .AtcDone {
    display: none;
  }

  & .Atc {
    display: block;
  }

  &.loading {
    & .AtcDone {
      display: block;
    }

    & .Atc {
      display: none;
    }
  }
`;

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;

export default function AddToCart({ id }) {
  const [isAdded, setIsAdded] = useState(false);
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
    async onCompleted() {
      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
      }, 5000);
    },
  });
  const me = useUser();
  if (!me)
    return (
      <Link href="/SignIn">
        <button
          type="button"
          style={{
            fontSize: '1.15em',
            background: 'white',
            color: 'green',
            borderRadius: '5px',
          }}
        >
          Login to Add To Cart 🛒
        </button>
      </Link>
    );

  return (
    <ButtonSpan
      disabled={loading}
      className={isAdded ? 'loading' : ''}
      type="button"
      onClick={addToCart}
      style={{
        fontSize: '1.15em',
        background: 'white',
        color: 'green',
        borderRadius: '5px',
      }}
    >
      <span className="Atc">Add{loading && 'ing'} To Cart 🛒</span>
      <span className="AtcDone" style={{ color: 'green' }}>
        Added To Cart 🛒 ✅
      </span>
    </ButtonSpan>
  );
}
