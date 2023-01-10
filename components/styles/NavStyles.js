import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  justify-self: end;
  font-size: 1.1em;
  text-align: right;
  li {
    width: 100%;
    list-style-type: none;
  }
  @media (min-width: 991px) {
    display: flex;
    li {
      width: fit-content;
    }
  }
  a,
  button {
    padding: 1rem 1.1rem;
    display: flex;
    align-items: center;
    position: relative;
    font-weight: 500;
    font-size: 1.3em;
    background: none;
    border: 0;
    color: #0077a0;
    cursor: pointer;
    &:before {
      content: '';
      width: 2px;
      background: var(--lightGray);
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: #fde6ff;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      text-decoration: none;
      &:after {
        width: calc(100% - 60px);
      }
      @media (max-width: 700px) {
        width: calc(100% - 10px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid var(--lightGray);
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavStyles;
