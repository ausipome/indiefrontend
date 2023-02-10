import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import nProgress from 'nprogress';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Router, useRouter } from 'next/dist/client/router';
import { useUser, CURRENT_USER_QUERY } from './User';
import SickButton from './styles/SickButton';
import { useCart } from '../lib/cartState';
import { USER_ORDERS_QUERY } from '../pages/orders';
import { ALL_PRODUCTS_QUERY } from './Products';
import { PAGINATION_QUERY } from './Pagination';
import LoadBar from './LoadBar';

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;

const promise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm() {
  const theUser = useUser();
  let clientSecret = '';
  let succeeded = false;
  let chargeId = '';
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { closeCart } = useCart();
  const [checkout, { error: graphQLError }] = useMutation(
    CREATE_ORDER_MUTATION,
    {
      refetchQueries: [
        { query: USER_ORDERS_QUERY },
        'USER_ORDERS_QUERY',
        { query: CURRENT_USER_QUERY },
        'CURRENT_USER_QUERY',
        { query: ALL_PRODUCTS_QUERY },
        'ALL_PRODUCTS_QUERY',
        { query: PAGINATION_QUERY },
        'PAGINATION_QUERY',
      ],
    }
  );

  async function handleSubmit(e) {
    // 1. Stop the form from submitting and turn the loader one
    e.preventDefault();
    setLoading(true);
    // 2. Start the page transition
    nProgress.start();

    // 3. Calculate Total
    const cartItems = theUser.cart.filter((cartItem) => cartItem.product);
    const amount = cartItems.reduce(function (tally, cartItem) {
      return tally + cartItem.quantity * cartItem.product.price;
    }, 0);

    // 4. create payment intent via server and returns client secret

    fetch(`/api/payIntent/${amount}`)
      .then((res) => res.json())
      .then((data) => {
        clientSecret = data.clientSecret;
      })
      .then(async () => {
        console.log(clientSecret);
        const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        });
        if (payload.error) {
          setError(`Payment failed ${payload.error.message}`);
          nProgress.done();
          setLoading(false);
          succeeded = false;
        } else {
          console.log(payload.paymentIntent.id);
          chargeId = payload.paymentIntent.id;
          setError(null);
          succeeded = true;
        }
      })
      .then(async () => {
        console.log(succeeded);
        if (succeeded === true) {
          // 5. If payment complete send details to backend to complete checkout
          const order = await checkout({
            variables: {
              token: chargeId,
            },
          });
          // 6. Change the page to view the order
          router.push({
            pathname: `/order/[id]`,
            query: {
              id: order.data.checkout.id,
            },
          });
          // 7. Close the cart
          closeCart();

          // 8. turn the loader off
          setLoading(false);
          nProgress.done();
        } else if (succeeded === false) {
          document.getElementById('errorMessage').innerHTML = 'Card Declined!';
        }
      });
  }

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      <LoadBar load={loading} />
      {error && (
        <p
          id="errorMessage"
          style={{ fontSize: 18, color: 'red', textAlign: 'center' }}
        >
          {error.message}
        </p>
      )}
      {graphQLError && <p style={{ fontSize: 12 }}>{graphQLError.message}</p>}
      <CardElement />
      <SickButton className="nounderline">Pay Now</SickButton>
    </CheckoutFormStyles>
  );
}

function Checkout() {
  return (
    <Elements stripe={promise}>
      <CheckoutForm />
    </Elements>
  );
}

export { Checkout };
