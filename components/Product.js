import Link from 'next/link';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/money';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';
import { ALL_PRODUCTS_QUERY_REVIEW } from './ProductsReview';
import { useUser } from './User';
import Posted from './Posted';
import ModalFunction from './Modal';
import Refund from './Refund';
import Released from './Released';
import StatusTag from './styles/StatusTag';

const UPDATE_STATUS_MUTATION = gql`
  mutation UPDATE_STATUS_MUTATION($id: ID!, $dataStatus: String) {
    updateProduct(where: { id: $id }, data: { status: $dataStatus }) {
      id
    }
  }
`;

let canRelease = 'no';

export default function Product({ product, pageType }) {
  function hello() {}
  {
    const timeStamp = product?.date;
    const theDate = new Date(timeStamp);
    const datePlus = theDate.setDate(theDate.getDate() + 21);
    const date = new Date();
    const newDate = date.setDate(date.getDate());
    if (newDate > datePlus) {
      canRelease = 'yes';
    } else {
      canRelease = 'no';
    }
  }

  const fee = Math.ceil(product.price * 0.05);
  const amount = parseInt(product.price) - fee;

  const user = useUser();
  const [updateStatus, { data: Data, error: Error, loading: Loading }] =
    useMutation(UPDATE_STATUS_MUTATION);

  const handleStatus = async (event) => {
    const id = event.target.getAttribute('id');
    const dataStatus = event.target.getAttribute('data-status');
    const res = await updateStatus({
      variables: {
        id,
        dataStatus,
      },
      refetchQueries: [
        { query: ALL_PRODUCTS_QUERY_REVIEW },
        'ALL_PRODUCTS_QUERY_REVIEW',
      ],
    });
  };

  if (pageType === 'sell') {
    return (
      <ItemStyles>
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product.name}
          style={{
            borderBottom: 'solid thin #eeeeee',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
          }}
        />
        <Title>
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </Title>
        <PriceTag>{formatMoney(product.price)}</PriceTag>
        <p style={{ color: '#015268' }}>{product.description}</p>
        <div className="buttonList">
          <Link
            href={{
              pathname: '/update',
              query: {
                id: product.id,
              },
            }}
          >
            <a
              style={{
                borderBottomLeftRadius: '15px',
                textAlign: 'center',
                fontSize: '1em',
              }}
            >
              Edit ✏️
            </a>
          </Link>
          <DeleteProduct id={product.id}>Delete 🗑️</DeleteProduct>
        </div>
      </ItemStyles>
    );
  }
  if (pageType === 'sold') {
    return (
      <ItemStyles>
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product.name}
          style={{
            borderBottom: 'solid thin #eeeeee',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
          }}
        />
        <Title>
          <span
            style={{
              background: '#fde6ff',
              display: 'inline',
              lineHeight: '1.3',
              fontSize: '4rem',
              textAlign: ' center',
              color: '#0077a0',
              padding: '0 1rem',
            }}
          >
            {product.name}
          </span>
        </Title>
        <p style={{ color: '#015268' }}>{product.description}</p>
        <p style={{ color: 'grey', margin: '0px' }}>Sold on: {product.date}</p>
        <p style={{ color: 'black', marginTop: '0px' }}>
          <span style={{ color: 'red' }}>Let's talk money...</span>
          <br />
          Sold for: {formatMoney(product.price)}
          <br />
          Fee (5%): {formatMoney(fee)}
          <br />
          Net: {formatMoney(amount)}
        </p>
        <h3
          style={{
            margin: '0px',
            paddingLeft: '30px',
            paddingTop: '15px',
            color: 'green',
            borderTop: 'solid thin #000000',
          }}
        >
          Post to{' '}
        </h3>

        {product?.order?.user?.postcode === '' && (
          <p
            style={{
              textAlign: 'center',
              color: 'red',
              margin: '0px',
              paddingBottom: '7px',
            }}
          >
            No address on file, please contact buyer!
          </p>
        )}
        {product?.order?.user?.postcode !== '' && (
          <p
            style={{
              margin: '0px',
              paddingBottom: '7px',
              color: 'black',
            }}
          >
            {product?.order?.user?.name} <br />
            {product?.order?.user?.address} <br />
            {product?.order?.user?.town} <br />
            {product?.order?.user?.county} <br />
            {product?.order?.user?.postcode} <br />
          </p>
        )}

        <ModalFunction id={product.id} pageTypeMod="seller" />

        {product?.status !== 'REFUNDED' && product?.status !== 'RECEIVED' && (
          <Refund id={product.id}>Refund Item</Refund>
        )}

        {product?.status === 'ONHOLD' && (
          <Released id={product.id}>Release Funds</Released>
        )}

        {canRelease === 'yes' &&
          product?.status !== 'ONHOLD' &&
          product?.status !== 'RECEIVED' &&
          product?.status !== 'FLAGGED' &&
          product?.status !== 'RECEIVEDBACK' &&
          product?.status !== 'REFUNDED' && (
            <Released id={product.id}>Release Funds</Released>
          )}

        {product?.status === 'SOLD' && (
          <div className="buttonList">
            <Posted id={product.id}>Mark posted 📮</Posted>
          </div>
        )}
        {product?.status === 'POSTED' && (
          <div className="buttonList">
            <button
              onClick={hello}
              type="button"
              style={{
                fontSize: '1.2em',
                textAlign: 'center',
                padding: '1rem',
                margin: '0px',
                cursor: 'default',
                color: 'green',
              }}
            >
              <span style={{ color: 'black' }}>Status:</span> Posted
            </button>
          </div>
        )}
        {product?.status === 'RECEIVED' && (
          <div className="buttonList">
            <button
              onClick={hello}
              type="button"
              style={{
                fontSize: '1.2em',
                textAlign: 'center',
                padding: '1rem',
                margin: '0px',
                cursor: 'default',
                color: 'green',
              }}
            >
              <span style={{ color: 'black' }}>Status:</span> Received
            </button>
          </div>
        )}
        {product?.status === 'ONHOLD' && (
          <div className="buttonList">
            <button
              onClick={hello}
              type="button"
              style={{
                fontSize: '1.2em',
                textAlign: 'center',
                padding: '1rem',
                margin: '0px',
                cursor: 'default',
                color: 'purple',
              }}
            >
              <span style={{ color: 'black' }}>Status:</span> Received
            </button>
          </div>
        )}
        {product?.status === 'REFUNDED' && (
          <div className="buttonList">
            <button
              onClick={hello}
              type="button"
              style={{
                fontSize: '1.2em',
                textAlign: 'center',
                padding: '1rem',
                margin: '0px',
                cursor: 'default',
                color: 'red',
              }}
            >
              <span style={{ color: 'black' }}>Status:</span> Refunded
            </button>
          </div>
        )}
        {product?.status === 'FLAGGED' && (
          <div className="buttonList">
            <button
              onClick={hello}
              type="button"
              style={{
                fontSize: '1.2em',
                textAlign: 'center',
                padding: '1rem',
                margin: '0px',
                cursor: 'default',
                color: 'red',
              }}
            >
              <span style={{ color: 'black' }}>Status:</span> Issue Raised!
            </button>
          </div>
        )}
      </ItemStyles>
    );
  }
  if (pageType === 'review') {
    return (
      <ItemStyles>
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product.name}
          style={{
            borderBottom: 'solid thin #eeeeee',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
          }}
        />
        <Title>
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </Title>
        <PriceTag>{formatMoney(product.price)}</PriceTag>
        <p style={{ color: '#015268' }}>{product.description}</p>
        <div className="buttonList">
          <button
            id={product.id}
            data-status="DECLINED"
            onClick={handleStatus}
            type="button"
            style={{ fontSize: '1.15em' }}
          >
            Decline ❌
          </button>
          <Link
            href={{
              pathname: '/update',
              query: {
                id: product.id,
              },
            }}
          >
            <a
              style={{
                borderBottomLeftRadius: '15px',
                textAlign: 'center',
                fontSize: '1em',
              }}
            >
              Edit ✏️
            </a>
          </Link>
          <button
            id={product.id}
            data-status="AVAILABLE"
            onClick={handleStatus}
            type="button"
            style={{ fontSize: '1.15em' }}
          >
            Accept 👍
          </button>
        </div>
      </ItemStyles>
    );
  }
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
        style={{
          borderBottom: 'solid thin #eeeeee',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
        }}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>
        {formatMoney(product.price)}
        <br />
        <span>Inc UK Postage</span>
      </PriceTag>
      <StatusTag>{product.condition}</StatusTag>
      <p style={{ color: '#015268' }}>{product.description}</p>
      <div className="buttonList">
        {product?.user?.id === user?.id && (
          <Link
            href={{
              pathname: '/update',
              query: {
                id: product.id,
              },
            }}
          >
            <a
              style={{
                borderBottomLeftRadius: '15px',
                textAlign: 'center',
                fontSize: '1em',
              }}
            >
              Edit ✏️
            </a>
          </Link>
        )}
        {product?.user?.id !== user?.id && <AddToCart id={product.id} />}
        {product?.user?.id === user?.id && (
          <DeleteProduct id={product.id}>Delete 🗑️</DeleteProduct>
        )}
      </div>
    </ItemStyles>
  );
}
