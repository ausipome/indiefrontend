import styled from 'styled-components';
import Image from 'next/image';
import Footer from '../components/Footer';

const MainImageStyle = styled.div`
  width: 95%;
  height: 1150px;
  margin-left: 2.5%;
  margin-top: 12px;
  border-radius: 15px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  text-align: center;
  float: left;
  @media (min-width: 650px) {
    width: 85%;
    margin-left: 7.5%;
    height: 1000px;
  }
  @media (min-width: 650px) {
    height: 600px;
  }
  @media (min-width: 1500px) {
    height: 700px;
  }
`;

const GridStyle = styled.div`
  margin: 0 auto;
  width: 100%;
  display: grid;
  column-gap: 2%;
  row-gap: 2%;
  text-align: center;
  @media (min-width: 600px) {
    column-gap: 10%;
    row-gap: 2%;
    grid-template-columns: 40% 40%;
    margin-bottom: 65px;
  }
  @media (min-width: 900px) {
    margin-top: 1%;
    margin-left: 10%;
    width: 80%;
    column-gap: 5%;
    row-gap: 2%;
    grid-template-columns: 45% 45%;
  }
`;

const H2Style = styled.h2`
  line-height: 2em;
  color: black;
  margin-top: 6%;
  @media (min-width: 600px) {
    font-size: 1em;
  }
  @media (min-width: 1200px) {
    font-size: 1.3em;
  }
`;

const ImageControl = styled.div`
  box-shadow: 0 0 5px 3px #efefefef;
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  border-radius: 15px;
  overflow: hidden;
  max-width: 90% !important;
  margin-left: 5%;
  max-height: 150px !important;
  @media (min-width: 300px) {
    max-height: 172px !important;
  }
  @media (min-width: 400px) {
    max-height: 250px !important;
  }
  @media (min-width: 600px) {
    max-width: 500px !important;
    max-height: 160px !important;
  }
  @media (min-width: 900px) {
    max-height: 222px !important;
  }
  @media (min-width: 1200px) {
    max-height: 303px !important;
  }
  @media (min-width: 1500px) {
    max-height: 385px !important;
  }
`;

export default function ContactPage() {
  return (
    <>
      <MainImageStyle>
        <h1
          style={{
            fontFamily: 'Roboto',
            fontWeight: 'bold',
            color: '#024863',
            fontSize: '3em',
            marginTop: '20px',
            marginBottom: '20px',
            marginLeft: '27%',
            width: '50%',
            textAlign: 'left',
          }}
        >
          Get In Touch
        </h1>

        <h2
          style={{
            fontFamily: 'Roboto',
            color: 'black',
            lineHeight: '2em',
            marginLeft: '27%',
            width: '50%',
            textAlign: 'left',
          }}
        >
          <span style={{ fontSize: '1.1em' }}>
            Indie Bubba was created by parents, for parents. Good quality new
            and used babywear, at great prices!
          </span>{' '}
        </h2>

        <GridStyle>
          <div>
            <ImageControl>
              <Image
                src="/baby-contact.jpg"
                alt="Indie Bubba Contact"
                width="500"
                height="457"
                style={{ objectFit: 'cover !important' }}
              />
            </ImageControl>
          </div>
          <div>
            <H2Style>
              <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                Need help selling on Indie Bubba?
              </span>
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                Have an issue with an order?
              </span>
              <br />
              <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                Or just want to say hello!
              </span>
              <br />
              <br />
              <span style={{ fontSize: '1.1em' }}>
                If you would like to get in touch with us please send us an
                email @{' '}
                <a href="mailto:hello@indiebubba.com">hello@indiebubba.com</a>
              </span>
            </H2Style>
          </div>
        </GridStyle>
      </MainImageStyle>
      <Footer />
    </>
  );
}
