import { useRouter } from 'next/dist/client/router';
import { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import ProductsSell from '../components/ProductsSell';
import CreateProduct from '../components/createProduct';
import PleaseSignIn from '../components/PleaseSignIn';
import ProductsSold from '../components/ProductsSold';
import { useUser } from '../components/User';
import LoadBar from '../components/LoadBar';
import Footer from '../components/Footer';
import SellRule from '../components/SellRule';

const AccountStyles = styled.div`
  @media (min-width: 900px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export default function SellPage() {
  const theUser = useUser();
  const theName = theUser?.name;
  const theEmail = theUser?.email;
  const acc = theUser?.stripeId;
  const [data, setData] = useState('active');
  const [dataLink, setDataLink] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useLayoutEffect(() => {
    fetch(`/api/stripe/${acc}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.account.capabilities.transfers);
        console.log(data);
      })
      .then(
        fetch(`/api/link/${acc}`)
          .then((res) => res.json())
          .then((dataLink) => {
            setDataLink(dataLink.accountLink.url);
            console.log(dataLink);
            setLoading(false);
          })
      );
  }, []);

  const [selling, setSelling] = useState(true);
  const [sold, setSold] = useState(false);
  const sellHandler = () => {
    setSelling(true);
    setSold(false);
  };
  const soldHandler = () => {
    setSelling(false);
    setSold(true);
  };

  const { query } = useRouter();
  const page = parseInt(query.page);

  if (isLoading) return <LoadBar load={isLoading} />;

  if (data === 'active')
    return (
      <>
        <PleaseSignIn>
          <LoadBar load={isLoading} />
          <SellRule />
          <CreateProduct />
          {selling && (
            <>
              <button
                type="button"
                onClick={soldHandler}
                style={{
                  backgroundColor: 'white',
                  color: 'red',
                  fontSize: '1.5em',
                  marginTop: '12px',
                }}
              >
                Sold products 🔁
              </button>
              <ProductsSell />
            </>
          )}
          {sold && (
            <>
              <button
                type="button"
                onClick={sellHandler}
                style={{
                  backgroundColor: 'white',
                  color: 'red',
                  fontSize: '1.5em',
                  marginTop: '12px',
                }}
              >
                I'm selling 🔁
              </button>
              <ProductsSold />
            </>
          )}
        </PleaseSignIn>
        <Footer />
      </>
    );

  return (
    <AccountStyles>
      <h2
        style={{
          textAlign: 'center',
          borderBottom: 'solid thin #000',
          paddingBottom: '10px',
          fontWeight: 'normal',
        }}
      >
        {theName} <br /> {theEmail}
      </h2>
      <p style={{ textAlign: 'center', color: 'red', fontSize: '1.2em' }}>
        Do you plan on selling on Indie Bubba? If yes, we need some more
        information from you!
      </p>
      <p
        style={{
          textAlign: 'center',
          fontSize: '1.2em',
          color: 'black',
          padding: '25px',
          marginBottom: '0px',
        }}
      >
        If you are currently selling, or plan to sell on Indie Bubba, please
        follow the link below to update KYC verification <br /> and add the bank
        account you would like your funds paid in to.
      </p>
      <p
        style={{
          textAlign: 'center',
          fontSize: '1.2em',
          marginBottom: '40px',
          marginTop: '0px',
          paddingBottom: '20px',
          borderBottom: 'solid thin #000',
        }}
      >
        <a href={dataLink} style={{ color: 'green', marginTop: '0px' }}>
          Update Account
        </a>
      </p>
      <Footer />
    </AccountStyles>
  );
}
