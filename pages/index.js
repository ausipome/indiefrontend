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
  margin-bottom: 12px;
  @media (min-width: 400px) {
    margin-bottom: 20px;
  }
  @media (min-width: 600px) {
    margin-bottom: 140px;
  }
  @media (min-width: 800px) {
    margin-bottom: 170px;
  }
`;

const ImageControl = styled.div`
  box-shadow: 0 0 5px 3px #efefefef;
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  border-radius: 15px;
  overflow: hidden;
  max-width: 96% !important;
  margin-left: 2%;
  max-height: 160px !important;
  @media (min-width: 450px) {
    max-height: 250px !important;
  }
  @media (min-width: 600px) {
    max-height: 450px !important;
  }
  @media (min-width: 900px) {
    max-width: 900px !important;
    margin: 0 auto;
  }
`;
const HeadStyle = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  color: #024863;
  font-size: 3em;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 5%;
  width: 90%;
  text-align: left;
  @media (min-width: 600px) {
    margin-left: 20%;
    width: 60%;
  }
`;

export default function IndexPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div style={{ textAlign: 'center' }}>
      <MainImageStyle>
        <HeadStyle>
          Buy and Sell <br />
          New and Used Babywear
        </HeadStyle>
        <ImageControl>
          <Image
            src="/bubba-main.jpg"
            alt="Indie Bubba Crawling"
            width="900px"
            height="600px"
          />
        </ImageControl>
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
