import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Image from 'next/image';
import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import ErrorMessage from '../components/ErrorMessage';
import formatMoney from '../lib/money';
import OrderItemStyles from '../components/styles/OrderItemStyles';
import PleaseSignIn from '../components/PleaseSignIn';
import { useUser } from '../components/User';
import LoadBar from '../components/LoadBar';
import Footer from '../components/Footer';

export const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY($thisUserId: ID) {
    orders(
      where: { user: { id: { equals: $thisUserId } } }
      orderBy: [{ timeStamp: desc }]
    ) {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo
      }
    }
  }
`;

const OrderUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4rem;
`;

function countItemsInAnOrder(order) {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
}

export default function OrdersPage() {
  const theUser = useUser();
  const postcode = theUser?.postcode;
  const theId = theUser?.id;
  const { data, error, loading } = useQuery(USER_ORDERS_QUERY, {
    variables: {
      thisUserId: theId,
    },
  });
  if (loading) return <LoadBar load={loading} />;
  if (error) return <ErrorMessage error={error} />;
  const { orders } = data;
  return (
    <PleaseSignIn>
      <div>
        <Head>
          <title>Your Orders ({orders.length})</title>
        </Head>
        {orders.length === 0 && (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ textAlign: 'center' }}>
              You have placed {orders.length} orders!
            </h2>
            <h3 style={{ fontWeight: 'normal' }}>
              Check out our{' '}
              <Link href="products">
                <a style={{ color: 'pink', textDecoration: 'underline' }}>
                  marketplace
                </a>
              </Link>{' '}
              to start buying!
            </h3>
            <Image
              src="/baby.jpg"
              alt="Indie Bubba Crying Baby"
              width="508px"
              height="704px"
            />
          </div>
        )}
        {orders.length > 0 && postcode === '' && (
          <h2
            style={{
              color: 'red',
              fontWeight: 'normal',
              textAlign: 'center',
              marginTop: '18px',
            }}
          >
            Please ensure your delivery address is up to date in your account!
          </h2>
        )}
        <div>
          {orders.length === 1 && (
            <div>
              <h2
                style={{
                  textAlign: 'center',
                  marginTop: '18px',
                  marginBottom: '18px',
                }}
              >
                You have placed {orders.length} order!
              </h2>
              <OrderUl style={{ width: '40%' }}>
                {orders.map((order) => (
                  <OrderItemStyles key={order.id}>
                    <Link href={`/order/${order.id}`}>
                      <a>
                        <div className="order-meta">
                          <p>{countItemsInAnOrder(order)} Items</p>
                          <p>
                            {order.items.length} Product
                            {order.items.length === 1 ? '' : 's'}
                          </p>
                          <p>{formatMoney(order.total)}</p>
                        </div>
                        <div className="images">
                          {order.items.map((item) => (
                            <img
                              key={`image-${item.id}`}
                              src={
                                process.env.NEXT_PUBLIC_IMAGE_PATH + item?.photo
                              }
                              alt={item.name}
                            />
                          ))}
                        </div>
                      </a>
                    </Link>
                  </OrderItemStyles>
                ))}
              </OrderUl>
            </div>
          )}
          {orders.length > 1 && (
            <div>
              <h2
                style={{
                  textAlign: 'center',
                  marginTop: '18px',
                  marginBottom: '18px',
                }}
              >
                You have placed {orders.length} orders!
              </h2>
              <OrderUl>
                {orders.map((order) => (
                  <OrderItemStyles key={order.id}>
                    <Link href={`/order/${order.id}`}>
                      <a>
                        <div className="order-meta">
                          <p>{countItemsInAnOrder(order)} Items</p>
                          <p>
                            {order.items.length} Product
                            {order.items.length === 1 ? '' : 's'}
                          </p>
                          <p>{formatMoney(order.total)}</p>
                        </div>
                        <div className="images">
                          {order.items.map((item) => (
                            <img
                              key={`image-${item.id}`}
                              src={
                                process.env.NEXT_PUBLIC_IMAGE_PATH + item.photo
                              }
                              alt={item.name}
                            />
                          ))}
                        </div>
                      </a>
                    </Link>
                  </OrderItemStyles>
                ))}
              </OrderUl>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </PleaseSignIn>
  );
}
