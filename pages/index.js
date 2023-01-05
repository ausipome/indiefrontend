import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import Image from 'next/image';
import Pagination from '../components/Pagination';
import Products from '../components/Products';
import Footer from '../components/Footer';

const MainImageStyle = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 12px;
  margin-bottom: 250px;
`;

export default function IndexPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div style={{ textAlign: 'center' }}>
      <MainImageStyle>
        <h1
          style={{
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            color: '#024863',
            fontSize: '3em',
            marginTop: '20px',
            marginBottom: '20px',
            marginLeft: '30%',
            width: '50%',
            textAlign: 'left',
          }}
        >
          Buy and Sell <br />
          New and Used Babywear
        </h1>
        <div
          style={{
            boxShadow: '0 0 5px 3px #eeeeee',
            background: 'rgba(0, 0, 0, 0.02)',
            border: '5px solid white',
            width: '900px',
            height: '600px',
            borderRadius: '15px',
            overflow: 'hidden',
            margin: '0 auto',
          }}
        >
          <Image
            src="/bubba-main.jpg"
            alt="Indie Bubba Crawling"
            width="900px"
            height="600px"
          />
        </div>
      </MainImageStyle>
      <Pagination page={page || 1} />
      <Products page={page || 1} />
      <div style={{ marginBottom: '55px' }}>
        <Pagination page={page || 1} />
      </div>
      <Footer />
    </div>
  );
}
