import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage';
import OrderStyles from '../../components/styles/OrderStyles';
import formatMoney from '../../lib/money';
import PleaseSignIn from '../../components/PleaseSignIn';
import { useUser } from '../../components/User';
import LoadBar from '../../components/LoadBar';
import Received from '../../components/Received';
import Flagged from '../../components/Flagged';
import Resolved from '../../components/Resolved';
import ModalFunction from '../../components/Modal';

export const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order(where: { id: $id }) {
      id
      charge
      total
      timeStamp
      date
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        status
        user {
          id
          email
        }
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;
export default function SingleOrderPage({ query }) {
  const theUser = useUser();
  const theId = theUser?.id;
  const postcode = theUser?.postcode;
  const { data, error, loading } = useQuery(SINGLE_ORDER_QUERY, {
    variables: { id: query.id },
  });
  if (loading) return <LoadBar load={loading} />;
  if (error) return <ErrorMessage error={error} />;
  const { order } = data;
  return (
    <PleaseSignIn>
      {(theId === order.user.id && postcode !== null) ||
        (theId === order.user.id && postcode !== '' && (
          <h2
            style={{ color: 'red', fontWeight: 'normal', textAlign: 'center' }}
          >
            Please ensure your delivery address is up to date in your account!
          </h2>
        ))}
      {theId === order.user.id && (
        <OrderStyles>
          <Head>
            <title>Indie Bubba - {order.id}</title>
          </Head>
          <div style={{ marginLeft: '5%', marginTop: '5%' }}>
            <p>
              <span>Order Id: </span>
              <span style={{ color: 'black' }}>{order.id}</span>
            </p>
            <p>
              <span>Order Date: </span>
              <span style={{ color: 'black' }}>{order.date}</span>
            </p>
            <p>
              <span>Order Total: </span>
              <span style={{ color: 'black' }}>{formatMoney(order.total)}</span>
            </p>
            <p>
              <span>Item Count: </span>
              <span style={{ color: 'black' }}>{order.items.length}</span>
            </p>
            <p style={{ color: 'red', paddingRight: '12px' }}>
              Please be aware, when purchasing multiple items, you are most
              likely purchasing from different sellers.
              <br />
              Delivery times may be slightly different.
              <br /> If there is an issue with one of the items, please ensure
              you contact the correct seller!
            </p>
          </div>
          <div className="items">
            {order.items.map((item) => (
              <div className="order-item" key={item.id}>
                <img
                  src={item.photo.image.publicUrlTransformed}
                  alt={item.title}
                />
                <div className="item-details">
                  <h2>{item.name}</h2>
                  <p>Price: {formatMoney(item.price)}</p>
                  <p>{item.description}</p>
                  {item.status === 'SOLD' && (
                    <p style={{ color: 'green' }}>Status: Awaiting postage</p>
                  )}
                  {item.status === 'POSTED' && (
                    <p style={{ color: 'green' }}>Status: Posted</p>
                  )}
                  {item.status === 'RECEIVED' && (
                    <p style={{ color: 'green' }}>Status: Received</p>
                  )}
                  {item.status === 'ONHOLD' && (
                    <p style={{ color: 'green' }}>Status: Received</p>
                  )}
                  {item.status === 'FLAGGED' && (
                    <p style={{ color: 'green' }}>Status: Issue Raised</p>
                  )}
                  {item.status === 'REFUNDED' && (
                    <p style={{ color: 'green' }}>Status: Refunded</p>
                  )}
                  {item.status === 'RECEIVEDBACK' && (
                    <p style={{ color: 'green' }}>
                      Status: Seller Received Back
                    </p>
                  )}
                  {item.status !== 'RECEIVED' &&
                    item.status !== 'ONHOLD' &&
                    item.status !== 'FLAGGED' &&
                    item.status !== 'RECEIVEDBACK' &&
                    item.status !== 'REFUNDED' && (
                      <Received id={item.id}>Mark Received</Received>
                    )}
                  {item.status !== 'RECEIVED' &&
                    item.status !== 'ONHOLD' &&
                    item.status !== 'FLAGGED' &&
                    item.status !== 'RECEIVEDBACK' &&
                    item.status !== 'REFUNDED' && (
                      <Flagged id={item.id}>Raise Issue</Flagged>
                    )}
                  {item.status === 'FLAGGED' && (
                    <Resolved id={item.id}>Issue Resolved</Resolved>
                  )}
                  <ModalFunction id={item.id} pageTypeMod="buyer" />
                </div>
              </div>
            ))}
          </div>
        </OrderStyles>
      )}
      {theId !== order.user.id && (
        <h2 style={{ color: 'red', textAlign: 'center' }}>
          You do not have access to this order!
        </h2>
      )}
    </PleaseSignIn>
  );
}
