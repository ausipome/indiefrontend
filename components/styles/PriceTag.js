import styled from 'styled-components';

const PriceTag = styled.span`
  background: #fde6ff;
  transform: rotate(3deg);
  color: #0077a0;
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;
  span {
    font-size: 0.5em;
    color: black;
    font-weight: normal;
  }
`;

export default PriceTag;
