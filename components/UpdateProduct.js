import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
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
      photo
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
    $photo: String!
  ) {
    updateProduct(
      where: { id: $id }
      data: {
        name: $name
        description: $description
        price: $price
        status: "DRAFT"
        condition: $condition
        photo: $photo
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
  const [theFile, setTheFile] = useState('');
  const handleFileChange = (e) => {
    if (e.target.files) {
      const formData = new FormData();
      formData.append('image', e.target.files[0]);
      const theCode = process.env.NEXT_PUBLIC_IMAGE_CODE;
      formData.append('code', theCode);
      formData.append('oldFile', theFile);

      fetch(
        `https://theimagesofindiebubba.toomanyideas.co.uk/imageprocess.php`,
        {
          method: 'Post',
          referrerPolicy: 'no-referrer-when-downgrade',
          body: formData,
        }
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.code === 1) {
            setTheFile(result.file);
            document.getElementById(
              'fileText'
            ).innerHTML = `✅ ${result.realName} Uploaded!`;
          } else if (result.code === 2) {
            document.getElementById(
              'fileText'
            ).innerHTML = `❌ Image Upload Failed! ${result.message}`;
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
    async onCompleted(data) {
      setTheFile(data?.product.photo);
    },
  });

  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);

  const priceVal = data?.product.price / 100;

  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: data?.product.name,
    price: priceVal.toFixed(2),
    description: data?.product.description,
    condition: data?.product.condition,
  });

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
              photo: theFile,
            },
            refetchQueries: [
              { query: ALL_PRODUCTS_QUERY_SELL },
              'ALL_PRODUCTS_QUERY_SELL',
            ],
          });

          Router.push({
            pathname: `/product/${res.data.updateProduct.id}`,
          });
        }}
      >
        <DisplayError error={error || updateError} />
        <fieldset disabled={updateLoading} aria-busy={updateLoading}>
          <label
            htmlFor="image"
            title="Upload Image"
            style={{
              fontFamily: 'Arial',
              border: 'thin solid #000000',
              width: '180px',
              cursor: 'pointer',
              marginTop: '12px',
              textAlign: 'center',
              padding: '7px',
              background: '#fde6ff',
              color: '#015268',
              fontSize: '1.2em',
              display: 'inline-block',
              marginRight: '12px',
            }}
          >
            Update Image? 🚀
            <input
              style={{ display: 'none' }}
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
            />
          </label>
          <span id="fileText" />
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
