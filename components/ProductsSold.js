import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Product from './Product';
import { useUser } from './User';

export const ALL_PRODUCTS_QUERY_SOLD = gql`
  query ALL_PRODUCTS_QUERY_SOLD($thisUserId: ID) {
    orderItems(
      where: { user: { id: { equals: $thisUserId } } }
      orderBy: [{ timeStamp: desc }]
    ) {
      id
      name
      price
      description
      status
      tracking
      trackingCompany
      email
      timeStamp
      date
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
      order {
        user {
          name
          address
          address2
          town
          county
          postcode
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

export default function ProductsSold() {
  const theUser = useUser();
  const theId = theUser?.id;
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY_SOLD, {
    variables: {
      thisUserId: theId,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      {data.orderItems.length === 0 && (
        <h3 style={{ color: 'red', textAlign: 'center', fontWeight: 'normal' }}>
          You have made no sales!
        </h3>
      )}
      {data.orderItems.length != 0 && (
        <h2
          style={{
            textAlign: 'center',
            borderTop: 'solid thin #015268',
            borderBottom: 'solid thin #015268',
            marginTop: '3rem',
            marginBottom: '3rem',
          }}
        >
          Sold
        </h2>
      )}
      <ProductsListStyles>
        {data.orderItems.map((product) => (
          <Product key={product.id} product={product} pageType="sold" />
        ))}
      </ProductsListStyles>
    </div>
  );
}
