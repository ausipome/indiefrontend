import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import DisplayError from './ErrorMessage';
import formatMoney from '../lib/money';
import PriceTag from './styles/PriceTag';
import StatusTag from './styles/StatusTag';
import AddToCartButton from './AddToCartButton';
import DeleteProductButton from './DeleteProductButton';
import { useUser } from './User';

const ProductStyles = styled.div`
  display: grid;
  justify-content: center;
  align-items: top;
  gap: 2rem;
  padding: 3%;
  h4 {
    font-weight: normal;
  }
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    box-shadow: 5px 5px 5px 5px #efefef;
    border: thick solid #ffffff;
    border-radius: 15px;
  }
`;

export const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    product(where: { id: $id }) {
      user {
        id
      }
      name
      price
      description
      id
      status
      photo
    }
  }
`;
export default function SingleProduct({ id }) {
  const user = useUser();
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const Product = data.product;
  return (
    <ProductStyles>
      <Head>
        <title>Indie Bubba | {Product.name}</title>
      </Head>
      <div style={{ position: 'relative' }}>
        <PriceTag>{formatMoney(Product.price)}</PriceTag>
        {Product.user.id === user?.id && (
          <StatusTag>{Product.status}</StatusTag>
        )}
        <img
          src={process.env.NEXT_PUBLIC_IMAGE_PATH + Product?.photo}
          alt={Product.name}
        />
      </div>
      <div className="details">
        {Product.status === 'Draft' && (
          <h2 style={{ color: 'red' }}>
            Product is currently in review. It will be reviewed and posted
            shortly.
          </h2>
        )}
        <h2>{Product.name}</h2>
        <h4>{Product.description}</h4>
        {Product.user.id !== user?.id && <AddToCartButton id={Product.id} />}

        {Product.user.id === user?.id && (
          <div style={{ marginTop: '15px', textAlign: 'right' }}>
            <Link
              href={{
                pathname: '/update',
                query: {
                  id: Product.id,
                },
              }}
            >
              <button
                type="button"
                style={{
                  fontSize: '1.15em',
                  background: 'white',
                  color: 'green',
                  borderRadius: '5px',
                  marginRight: '7px',
                }}
              >
                Edit ✏️
              </button>
            </Link>
            <DeleteProductButton id={Product.id}>Delete 🗑️</DeleteProductButton>
          </div>
        )}
      </div>
    </ProductStyles>
  );
}
