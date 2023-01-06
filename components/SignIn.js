import gql from 'graphql-tag';
import { ApolloConsumer, useMutation } from '@apollo/client';
import { useState } from 'react';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY, useUser } from './User';
import Error from './ErrorMessage';

const SIGN_OUT_MUTATION_NEXT = gql`
  mutation {
    endSession
  }
`;

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
          confirmed
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;

export default function SignIn() {
  const [signState, setSignState] = useState(false);
  const user = useUser();

  const [signout] = useMutation(SIGN_OUT_MUTATION_NEXT, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });
  const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    async onCompleted(data) {
      const emailCheck = data?.authenticateUserWithPassword?.item?.confirmed;
      console.log(emailCheck);
      if (emailCheck === 'no') {
        signout();
        document.getElementById('logMessage').innerHTML =
          'Please confirm your email address to continue to use all of Indie Bubba`s features! ';
      }
    },
  });
  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;

  async function handleSubmit(e) {
    document.getElementById('logMessage').innerHTML = '';
    e.preventDefault(); // stop the form from submitting
    const res = await signin();
    if (res.data?.authenticateUserWithPassword?.item?.confirmed === 'yes') {
      setSignState(true);
    }
  }

  return (
    <>
      {signState && (
        <ApolloConsumer>
          {(client) => {
            client.refetchQueries({
              include: [CURRENT_USER_QUERY],
            });
          }}
        </ApolloConsumer>
      )}
      <Form method="POST" onSubmit={handleSubmit}>
        {user && (
          <h2
            style={{ color: 'red', textAlign: 'center', fontWeight: 'normal' }}
          >
            Welcome back {user.name} 😊
          </h2>
        )}
        <h2>Login to Your Account</h2>
        <h2
          style={{ color: 'red', textAlign: 'center', fontWeight: 'normal' }}
          id="logMessage"
        />
        <Error error={error} />
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              autoComplete="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              value={inputs.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Login</button>
        </fieldset>
      </Form>
    </>
  );
}
