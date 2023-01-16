import styled from 'styled-components';

const OrderStyles = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  padding: 0;
  &::before {
    height: 10px;
    content: '';
    display: block;
    background-image: linear-gradient(to right, #0077a0 0%, #fde6ff 80%);
  }
  & > p {
    margin: 0;
    border-bottom: 1px solid var(--offWhite);
    span {
      padding: 1rem;
      &:first-child {
        font-weight: 900;
        text-align: right;
      }
    }
  }
  .order-item {
    border-bottom: 1px solid var(--offWhite);
    align-items: center;
    grid-gap: 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;
    @media (min-width: 750px) {
      display: grid;
      grid-template-columns: 300px 1fr;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top: thin solid #000000;
      @media (min-width: 750px) {
        border-top: none;
      }
    }
  }
  .item-details {
    margin-top: 22px;
    @media (min-width: 750px) {
      margin-top: 0px;
    }
  }
`;
export default OrderStyles;
