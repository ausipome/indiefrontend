import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { perPage } from '../config';
import LoadBar from './LoadBar';
import Product from './Product';

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    products(
      where: { status: { equals: "AVAILABLE" } }
      orderBy: [{ description: asc }]
      take: $first
      skip: $skip
    ) {
      id
      name
      price
      description
      condition
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
      user {
        id
      }
    }
  }
`;

const ProductsListStyles = styled.div`
  margin: 0 auto;
  width: 90%;
  display: grid;
  column-gap: 25px;
  row-gap: 25px;
  @media (min-width: 600px) {
    column-gap: 10%;
    row-gap: 2%;
    grid-template-columns: 40% 40%;
    margin-bottom: 65px;
  }
  @media (min-width: 900px) {
    margin-top: 1%;
    width: 80%;
    column-gap: 7%;
    row-gap: 4%;
    grid-template-columns: 30% 30% 30%;
  }
`;

export default function Products({ page }) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });
  if (loading) return <LoadBar load={loading} />;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <ProductsListStyles>
        {data.products.map((product) => (
          <Product key={product.id} product={product} pageType="Products" />
        ))}
      </ProductsListStyles>
    </div>
  );
}
