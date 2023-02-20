import Link from 'next/link';
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
  font-size: 0.5em;
  padding-top: 7px;
  @media (min-width: 350px) {
    font-size: 0.8em;
  }
  @media (min-width: 480px) {
    font-size: 1.2em;
  }
`;

export default function Footer() {
  return (
    <BottomNav>
      <Link
        href="/privacy"
        style={{
          color: 'black',
          marginRight: '25px',
        }}
      >
        Privacy &nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
      </Link>
      <a
        href="https://indiebubba.com"
        style={{
          color: 'black',
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
          color: 'black',
          marginLeft: '10px',
        }}
      >
        &nbsp; hello@indiebubba.com
      </a>
      <Link
        href="/terms"
        style={{
          color: 'black',
          marginLeft: '25px',
        }}
      >
        &nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; Terms
      </Link>
    </BottomNav>
  );
}
