import styled from 'styled-components';
import Image from 'next/image';

const BottomNav = styled.div`
  background-color: #ffffff;
  text-align: center;
  width: 100%;
  border-top: solid thin #000000;
  position: fixed;
  bottom: 0px;
  left: 0px;
  font-size: 0.7em;
  padding-top: 7px;
  @media (min-width: 480px) {
    font-size: 1.2em;
  }
`;

export default function Footer() {
  return (
    <BottomNav>
      <a
        href="https://indiebubba.com"
        style={{
          color: 'pink',
          verticalAlign: 'middle',
          marginRight: '10px',
        }}
      >
        indiebubba.com &nbsp;
      </a>
      <a
        target="_blank"
        href="https://instagram.com/indiebubba"
        rel="noreferrer"
        style={{
          marginRight: '10px',
        }}
      >
        <Image
          src="/icons8-instagram-40.png"
          alt="Indie Bubba Instagram"
          width="40"
          height="40"
        />
      </a>

      <a
        target="_blank"
        href="https://facebook.com/indiebubba"
        rel="noreferrer"
        style={{
          marginLeft: '10px',
        }}
      >
        <Image
          src="/icons8-facebook-64.png"
          alt="Indie Bubba Facebook"
          width="40"
          height="40"
        />
      </a>
      <a
        href="mailto:hello@indiebubba.com"
        style={{
          color: 'pink',
          marginLeft: '10px',
        }}
      >
        &nbsp; hello@indiebubba.com
      </a>

      <a
        href="#.com"
        style={{
          padding: '0',
          margin: '0',
          color: 'pink',
          fontSize: '0.8em',
          right: '7px',
          position: 'absolute',
        }}
      >
        &copy; TMI Trading Co LTD
      </a>
    </BottomNav>
  );
}
