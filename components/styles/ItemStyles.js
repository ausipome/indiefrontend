import styled from 'styled-components';

const ItemStyles = styled.div`
  background: white;
  border: thin solid #eeeeee;
  box-shadow: 2px 2px #efefef;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    border-top: solid thin #eeeeee;
    display: grid;
    width: 100%;
    color: black;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: var(--lightGray);
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export default ItemStyles;
