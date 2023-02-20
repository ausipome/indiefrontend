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
      photo
      user {
        id
      }
    }
  }
`;

const ProductsListStyles = styled.div`
  flex-wrap: wrap;
  margin: 0 auto;
  width: 96%;
  display: grid;
  column-gap: 0px;
  row-gap: 35px;
  margin-bottom: 20px;
  @media (min-width: 600px) {
    column-gap: 5%;
    row-gap: 1%;
    grid-template-columns: 47% 47%;
    margin-bottom: 700px;
  }
  @media (min-width: 900px) {
    padding-right: 2%;
    column-gap: 3%;
    grid-template-columns: 32% 32% 32%;
    margin-bottom: 325px;
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
    <ProductsListStyles>
      {data.products.map((product) => (
        <Product key={product.id} product={product} pageType="Products" />
      ))}
    </ProductsListStyles>
  );
}
