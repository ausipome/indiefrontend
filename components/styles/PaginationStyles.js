import styled from 'styled-components';

const PaginationStyles = styled.div`
  font-family: Roboto;
  font-weight: bold;
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(2, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 0rem auto 2rem auto;
  border: 1px solid #000000;
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid #000000;
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

export default PaginationStyles;
