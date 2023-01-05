import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import Error from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email)
  }
`;

export default function RequestReset() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  });
  const [signup, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
    }
  );
  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting
    const res = await signup().catch(console.error);
    resetForm();
    // Send the email and password to the graphqlAPI
  }

  return (
    <Form
      method="POST"
      onSubmit={handleSubmit}
      style={{ marginBottom: '75px', marginTop: '25px' }}
    >
      <h2>Request a Password Reset</h2>
      <Error error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        {data?.sendUserPasswordResetLink === null && (
          <p style={{ color: 'red', fontWeight: 'normal' }}>
            Success! Check your email for a link!
          </p>
        )}
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
        <button type="submit">Request Reset</button>
      </fieldset>
    </Form>
  );
}
