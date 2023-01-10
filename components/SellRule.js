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
  @media (min-width: 600px) {
    width: 80%;
    margin-left: 10%;
  }
`;

export default function SellRule() {
  return (
    <RuleStyles>
      <h2 style={{ textAlign: 'center' }}>
        Sell on <span style={{ color: 'pink' }}>Indie Bubba</span> in 3 simple
        steps...
      </h2>
      <div
        style={{
          margin: '0 auto',
          width: '70%',
          paddingTop: '12px',
          lineHeight: '2em',
        }}
      >
        <ul>
          <li>
            Ensure items are good quality!{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 'normal' }}>
              Clothes must not be ripped or stained. The buyer has full rights
              to reject poor quality items and will be returned to the seller at
              their own cost, for a full refund.
            </span>
          </li>
          <li>
            Photograph the item/s.{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 'normal' }}>
              You only get one photo per listing, so be sure to make it count!{' '}
              <br /> A great photo makes you stand out from the rest.
            </span>
          </li>
          <li>
            Complete and submit the simple form below.{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 'normal' }}>
              Keep names and descriptions brief and to the point! It will help
              sell your item quickly.
            </span>
          </li>
        </ul>
        <h3
          style={{
            textAlign: 'center',
            fontStyle: 'italic',
            lineHeight: '2em',
            color: 'black',
          }}
        >
          Listing your items on Indie Bubba is free! <br /> You will be charged
          5% of the total sale price of your listing, only if it sells.
          <br />
          Postage must be included in your sale price!
        </h3>
        <h2 style={{ textAlign: 'center', color: 'pink' }}>Happy selling 😁</h2>
      </div>
    </RuleStyles>
  );
}
