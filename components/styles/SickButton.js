import styled from 'styled-components';

const SickButton = styled.button`
  background-image: linear-gradient(
    to right,
    #0077a0 0%,
    #fde6ff 40%
  ) !important;
  color: black !important;
  font-weight: 500 !important;
  border: 0 !important;
  border-radius: 0 !important;
  font-size: 2rem !important;
  padding: 0.8rem 1.5rem !important;
  transform: skew(-2deg) !important;
  display: inline-block !important;
  cursor: pointer;
  text-align: center;
  transition: all 0.5s;
  &[disabled] {
    opacity: 0.5;
  }
  &:after {
    background: transparent !important;
  }
`;

export default SickButton;
