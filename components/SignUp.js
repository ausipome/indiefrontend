import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import Error from './ErrorMessage';
import SignIn from './SignIn';

const STRIPE_MUTATION = gql`
  mutation STRIPE_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    stripeUser(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

export default function SignUpStripe() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    name: '',
    password: '',
  });
  const [signupstripe, { data, loading, error }] = useMutation(
    STRIPE_MUTATION,
    {
      variables: inputs,
    }
  );
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await signupstripe().catch(console.error);
    resetForm();
  }

  if (data?.stripeUser) {
    return (
      <>
        <h2
          style={{
            color: 'red',
            fontWeight: 'normal',
            textAlign: 'center',
            padding: '12px',
          }}
        >
          Welcome to Indie Bubba, {data.stripeUser.email} 😊 <br /> Please
          confirm your email address via the link which you have been sent!
        </h2>
        <SignIn />
      </>
    );
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Register For an Account</h2>
      <Error error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="name">
          Your Full Name
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="off"
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
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </fieldset>
    </Form>
  );
}
