import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import { useUser } from './User';

const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION(
    $id: ID!
    $address: String
    $town: String
    $county: String
    $postcode: String
  ) {
    updateUser(
      where: { id: $id }
      data: {
        address: $address
        town: $town
        county: $county
        postcode: $postcode
      }
    ) {
      id
      address
      town
      county
      postcode
    }
  }
`;

export default function UpdateUser() {
  const theUser = useUser();
  const id = theUser?.id;

  const [updateUser, { data, error, loading }] =
    useMutation(UPDATE_USER_MUTATION);

  const { inputs, handleChange, clearForm, resetForm } = useForm({
    address: theUser?.address,
    town: theUser?.town,
    county: theUser?.county,
    postcode: theUser?.postcode,
  });

  return (
    <>
      <Form
        onSubmit={async (e) => {
          document.getElementById('updateMessage').innerHTML = '';
          e.preventDefault();
          const res = await updateUser({
            variables: {
              id,
              address: inputs.address,
              town: inputs.town,
              county: inputs.county,
              postcode: inputs.postcode,
            },
          });
          if (res) {
            document.getElementById('updateMessage').innerHTML = 'Updated!';
          }
        }}
      >
        <h2>Postal Address</h2>
        <h4 id="updateMessage" style={{ fontWeight: 'normal', color: 'red' }} />

        <DisplayError error={error} />
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="address">
            Address
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              value={inputs.address}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="town">
            Town
            <input
              type="text"
              id="town"
              name="town"
              placeholder="Town"
              value={inputs.town}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="county">
            County
            <input
              type="text"
              id="county"
              name="county"
              placeholder="County"
              value={inputs.county}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="postcode">
            Postcode
            <input
              type="text"
              id="postcode"
              name="postcode"
              placeholder="Postcode"
              value={inputs.postcode}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Update Address</button>
        </fieldset>
      </Form>
    </>
  );
}
