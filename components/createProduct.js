import { useMutation } from '@apollo/client';
import { useState } from 'react';
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
    $condition: String!
    $photo: String!
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        condition: $condition
        status: "DRAFT"
        photo: $photo
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

  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'Set of 5 baby grow - Size 3-6 month.',
    price: 9.99,
    description:
      '5 animal themed baby grow in size 3-6 month. Only worn a couple of times each as grew too quickly. All in very good condition.',
  });

  const [createProduct, { loading, error }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: {
        name: inputs.name,
        description: inputs.description,
        price: Math.ceil(parseFloat(inputs.price) * 100),
        condition: inputs.condition,
        photo: theFile,
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
          padding: '0.5em',
          fontSize: '2em',
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
            Upload Image 🚀
            <input
              style={{ display: 'none' }}
              required
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
