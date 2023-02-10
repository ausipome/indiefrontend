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

const NextRuleStyles = styled.div`
  margin: 0 auto;
  width: 90%;
  padding-top: 12px;
  line-height: 2em;
  @media (min-width: 600px) {
    width: 60%;
  }
`;

export default function SellRule() {
  return (
    <RuleStyles>
      <h2 style={{ textAlign: 'center' }}>
        Sell on <span style={{ color: 'pink' }}>Indie Bubba</span> in 3 simple
        steps...
      </h2>
      <NextRuleStyles>
        <ul>
          <li>
            <span style={{ fontSize: '1.3em' }}>Group it! </span>
            <span
              style={{
                fontStyle: 'italic',
                fontWeight: 'normal',
              }}
            >
              Because postage must be included in your sale price, it’s much
              better to group items together. <br />
              They don’t have to be the same type of item, but it is better if
              they are all the same size.
            </span>
          </li>
          <li>
            <span style={{ fontSize: '1.3em' }}>Snap it! </span>
            <span
              style={{
                fontStyle: 'italic',
                fontWeight: 'normal',
              }}
            >
              You only get one photo per listing, so be sure to make it count!{' '}
              <br /> A great photo makes you stand out from the rest.
            </span>
          </li>
          <li>
            <span style={{ fontSize: '1.3em' }}>Sell it! </span>
            <span
              style={{
                fontStyle: 'italic',
                fontWeight: 'normal',
              }}
            >
              Fill out the simple form below. <br /> Keep names and descriptions
              brief and to the point! It will help sell your item quickly.
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
          5% of the total sale price of your listing, ONLY if it sells.
          <br />
          UK Postage <span style={{ color: 'red' }}>MUST</span> be included in
          your sale price!
        </h3>
        <h2 style={{ textAlign: 'center', color: 'pink' }}>Happy selling 😁</h2>
      </NextRuleStyles>
    </RuleStyles>
  );
}
