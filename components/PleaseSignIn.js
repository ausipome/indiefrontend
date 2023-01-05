import { useState } from 'react';
import { useUser } from './User';
import SignIn from './SignIn';
import RequestReset from './RequestReset';

export default function pleaseSignIn({ children }) {
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

  const me = useUser();
  if (!me)
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
      </div>
    );
  return children;
}
