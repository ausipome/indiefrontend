import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import useForm from '../lib/useForm';
import { ALL_PRODUCTS_QUERY_SELL } from './ProductsSell';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
    $condition: String!
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        condition: $condition
        status: "DRAFT"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'Set of 5 baby grow - Size 3-6 month.',
    price: 9.99,
    description:
      '5 animal themed baby grow in size 3-6 month. Only worn a couple of times each as grew too quickly. All in very good condition.',
  });

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: {
        name: inputs.name,
        description: inputs.description,
        price: parseFloat(inputs.price) * 100,
        image: inputs.image,
        condition: inputs.condition,
      },
      refetchQueries: [
        { query: ALL_PRODUCTS_QUERY_SELL },
        'ALL_PRODUCTS_QUERY_SELL',
      ],
    }
  );

  return (
    <>
      <h2
        style={{
          textAlign: 'center',

          padding: '12px',
        }}
      >
        List New Product
      </h2>
      <Form
        onSubmit={async (e) => {
          document.getElementById('conditionMessage').innerHTML = '';
          e.preventDefault();
          const el = document.getElementById('condition').value;
          if (el === 'Select') {
            const setError = 'Please select a condition!';
            document.getElementById('conditionMessage').innerHTML = setError;
            return;
          }
          const res = await createProduct();
          clearForm();
          Router.push({
            pathname: `/product/${res.data.createProduct.id}`,
          });
        }}
      >
        <DisplayError error={error} />
        <span
          style={{
            color: 'red',
            fontSize: '1.3em',
            fontWeight: 'normal',
          }}
          id="conditionMessage"
        >
          &nbsp;
        </span>
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="image">
            Image
            <input
              required
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="name">
            Name
            <input
              required
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="price">
            Price (£)
            <input
              required
              type="text"
              step=".01"
              id="price"
              name="price"
              placeholder="Price"
              value={inputs.price}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="condition">
            Condition
            <select
              required
              id="condition"
              name="condition"
              value={inputs.condition}
              onChange={handleChange}
            >
              <option>Select</option>
              <option value="USED">Used</option>
              <option value="NEW">New</option>
            </select>
          </label>
          <label htmlFor="description">Description</label>
          <textarea
            required
            id="description"
            name="description"
            placeholder="description"
            value={inputs.description}
            onChange={handleChange}
          />

          <button type="submit">+ Add Listing</button>
        </fieldset>
      </Form>
    </>
  );
}
