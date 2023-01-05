import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Product from './Product';

export const ALL_PRODUCTS_QUERY_REVIEW = gql`
  query ALL_PRODUCTS_QUERY_REVIEW {
    products(where: { status: { equals: "DRAFT" } }) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
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
    margin-bottom: 200px;
  }
  @media (min-width: 900px) {
    margin-top: 2%;
    width: 70%;
    column-gap: 7%;
    row-gap: 2%;
    grid-template-columns: 28% 28% 28%;
  }
`;

export default function ProductsReview() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY_REVIEW, {});
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      {data.products.length != 0 && (
        <h2
          style={{
            textAlign: 'center',
            borderTop: 'solid thin #015268',
            borderBottom: 'solid thin #015268',
            marginTop: '3rem',
            marginBottom: '3rem',
          }}
        >
          To Review
        </h2>
      )}
      {data.products.length === 0 && (
        <h2
          style={{
            textAlign: 'center',
            borderTop: 'solid thin #015268',
            borderBottom: 'solid thin #015268',
            marginTop: '3rem',
            marginBottom: '3rem',
            color: 'red',
          }}
        >
          No Products To Review
        </h2>
      )}
      <ProductsListStyles>
        {data.products.map((product) => (
          <Product key={product.id} product={product} pageType="review" />
        ))}
      </ProductsListStyles>
    </div>
  );
}
