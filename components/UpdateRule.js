import styled from 'styled-components';

const RuleStyles = styled.div`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: #fefefefe;
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  color: #015268;
  width: 100%;
  margin-bottom: 40px;
  @media (min-width: 600px) {
    width: 80%;
    margin-left: 10%;
  }
  @media (min-width: 900px) {
    width: 60%;
    margin-left: 20%;
  }
`;

export default function SellRule() {
  return (
    <RuleStyles>
      <h2 style={{ textAlign: 'center' }}>Update Listing</h2>
      <h3
        style={{
          paddingTop: '12px',
          textAlign: 'center',
          lineHeight: '2em',
          color: 'red',
        }}
      >
        If you are not updating the photo then please leave this field blank!
      </h3>
      <h2 style={{ textAlign: 'center', color: 'pink' }}>Happy selling 😁</h2>
    </RuleStyles>
  );
}
