import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const LoadStyle = styled.div`
  border: 0;
  padding: 0;
  width: 100%;
  height: 12px;
  &[disabled] {
    opacity: 0.5;
  }
  &::before {
    height: 5px;
    content: '';
    display: block;
    background-image: linear-gradient(to right, #0077a0 0%, #fde6ff 80%);
  }
  &[aria-busy='true']::before {
    background-size: 50% auto;
    animation: ${loading} 0.5s linear infinite;
  }
`;

export default function LoadBar({ load }) {
  return (
    <LoadStyle disabled={load} aria-busy={load}>
      &nbsp;
    </LoadStyle>
  );
}
