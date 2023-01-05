import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useState } from 'react';
import Footer from '../components/Footer';
import RequestReset from '../components/RequestReset';
import SignIn from '../components/SignIn';

const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION($id: ID!) {
    updateUser(where: { id: $id }, data: { confirmed: "yes" }) {
      confirmed
    }
  }
`;

export default function SignInPage({ query }) {
  const [updateUser, { data, error, loading }] =
    useMutation(UPDATE_USER_MUTATION);

  async function updateUserFunc() {
    const res = await updateUser({
      variables: {
        id: query.token,
      },
    });
  }
  if (query?.token) {
    updateUserFunc();
  }

  const [sign, setSign] = useState(true);
  const [forgot, setForgot] = useState(false);
  const signHandler = () => {
    setSign(true);
    setForgot(false);
  };
  const forgotHandler = () => {
    setSign(false);
    setForgot(true);
  };
  return (
    <div>
      {sign && (
        <>
          <SignIn />
          <button
            type="button"
            onClick={forgotHandler}
            style={{ backgroundColor: 'white', color: 'red' }}
          >
            Forgot Password! 🙃
          </button>
        </>
      )}
      {forgot && (
        <>
          <RequestReset />
          <button
            type="button"
            onClick={signHandler}
            style={{ backgroundColor: 'white', color: 'red' }}
          >
            Back to Sign In! 👈
          </button>
        </>
      )}
      <Footer />
    </div>
  );
}
