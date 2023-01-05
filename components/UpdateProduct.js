import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import { ALL_PRODUCTS_QUERY_SELL } from './ProductsSell';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      description
      price
      condition
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
    $condition: String!
  ) {
    updateProduct(
      where: { id: $id }
      data: {
        name: $name
        description: $description
        price: $price
        status: "DRAFT"
        condition: $condition
      }
    ) {
      id
      name
      description
      price
      condition
    }
  }
`;

const UPDATE_IMAGE_MUTATION = gql`
  mutation UPDATE_IMAGE_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $priceProduct: Int
    $image: Upload
    $condition: String!
  ) {
    updateProduct(
      where: { id: $id }
      data: {
        name: $name
        description: $description
        price: $priceProduct
        status: "DRAFT"
        condition: $condition
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      name
      description
      price
      condition
    }
  }
`;

export default function UpdateProduct({ id }) {
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });

  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);

  const [
    updateImageMutation,
    { data: updateDataIM, error: updateErrorIM, loading: updateLoadingIM },
  ] = useMutation(UPDATE_IMAGE_MUTATION);

  const priceVal = data?.product.price / 100;

  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: data?.product.name,
    price: priceVal.toFixed(2),
    description: data?.product.description,
    condition: data?.product.condition,
  });

  async function updateImage() {
    const res = await updateImageMutation({
      variables: {
        id,
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
    });
  }

  if (loading) return <p>loading...</p>;

  return (
    <>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await updateProduct({
            variables: {
              id,
              name: inputs.name,
              description: inputs.description,
              price: parseFloat(inputs.price) * 100,
              condition: inputs.condition,
            },
            refetchQueries: [
              { query: ALL_PRODUCTS_QUERY_SELL },
              'ALL_PRODUCTS_QUERY_SELL',
            ],
          });

          if (inputs.image !== undefined) {
            updateImage();
          }
          console.log(inputs.image);

          Router.push({
            pathname: `/product/${res.data.updateProduct.id}`,
          });
        }}
      >
        <DisplayError error={error || updateError} />
        <fieldset disabled={updateLoading} aria-busy={updateLoading}>
          <label htmlFor="image">
            Image
            <input
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
            Price
            <input
              required
              type="text"
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

          <button type="submit">Update Listing</button>
        </fieldset>
      </Form>
    </>
  );
}
