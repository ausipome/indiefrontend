import Link from 'next/link';
import styled from 'styled-components';
import Footer from '../components/Footer';

const MainStyles = styled.div`
  font-family: Roboto;
  color: 'black';
  margin-left: 5%;
  width: 90%;
  text-align: left;
`;

const HeadStyle = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  color: #024863;
  font-size: 3em;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 5%;
  width: 90%;
  text-align: left;
  @media (min-width: 600px) {
    margin-left: 20%;
    width: 60%;
  }
`;

export default function termsPage() {
  return (
    <div style={{ textAlign: 'center' }}>
      <MainStyles>
        <HeadStyle>
          Terms <br />
          And Conditions
          <h2 style={{ marginTop: '12px' }}>
            Welcome to IndieBubba.com, a buy and sell marketplace dedicated to
            connecting buyers and sellers of baby products. <br /> By accessing
            and using our platform, you agree to the following terms and
            conditions:
          </h2>
        </HeadStyle>
        <ol>
          <li>
            <span style={{ fontWeight: 'bold' }}>Membership:</span>
            <br /> a. To use our platform, you must register and create an
            account. You must be 18 years or older to register.
            <br /> b. You agree to provide accurate and truthful information
            during the registration process.
            <br /> c. You are responsible for maintaining the security of your
            account and password.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Listings:</span>
            <br /> a. Sellers must accurately describe their products and
            provide relevant information such as pricing, shipping, and payment
            options.
            <br /> b. IndieBubba.com reserves the right to reject or remove any
            listing that violates our policies or does not meet our standards.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Transactions:</span>
            <br /> a. Buyers are responsible for reviewing the product
            information, including pricing, shipping, and payment options,
            before making a purchase.
            <br /> b. IndieBubba.com is not responsible for any transactions
            that occur away from this platform between buyers and sellers.
            <br /> c. Transactions must adhere to the terms and conditions of
            our payment processor Stripe.
            <br /> d. We recommend that buyers and sellers communicate through
            our platform to avoid any misunderstandings or disputes.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Fees:</span>
            <br /> a. IndieBubba.com charges sellers a fee for each transaction
            made on our platform.
            <br /> b. Fees are subject to change, and we will provide notice of
            any changes to our users.
            <br /> c. Sellers are responsible for paying any taxes or other fees
            associated with their sales.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Prohibited Activities:</span>
            <br /> a. Users are not allowed to use our platform for any illegal
            or unethical activities.
            <br /> b. Users are prohibited from posting false or misleading
            information, harassing others, or engaging in any activities that
            could harm our platform or other users.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Intellectual Property:</span>
            <br /> a. Users must respect the intellectual property rights of
            others, including trademarks, copyrights, and patents.
            <br /> b. If you believe that someone has infringed on your
            intellectual property rights, please{' '}
            <a href="mailto:hello@indiebubba.com" style={{ color: 'blue' }}>
              contact us
            </a>{' '}
            immediately.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Termination:</span>
            <br /> a. IndieBubba.com reserves the right to terminate any user's
            account for any reason, including but not limited to violating our
            policies or engaging in prohibited activities.
            <br /> b. Upon termination, the user's access to our platform will
            be immediately revoked.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Returns Policy:</span>
            <br /> a. If a product is faulty or damaged, buyers should contact
            the seller directly to arrange for a return or refund.
            <br /> b. The buyer is responsible for ensuring that the faulty or
            damaged product is returned to the seller.
            <br /> c. IndieBubba.com is not responsible for any returns or
            refunds.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Disclaimer:</span>
            <br /> a. IndieBubba.com does not endorse any products or services
            listed on our platform.
            <br /> b. We do not guarantee the accuracy or completeness of any
            information provided by users.
            <br /> c. We are not liable for any damages or losses resulting from
            the use of our platform.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Modifications:</span>
            <br /> a. IndieBubba.com reserves the right to modify these terms
            and conditions at any time.
            <br /> b. Users will be notified of any changes to our policies.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Governing Law:</span>
            <br /> a. These terms and conditions are governed by the laws of the
            United Kingdom.
            <br /> b. Any disputes arising from the use of our platform will be
            resolved in accordance with the laws of the United Kingdom.
          </li>
        </ol>
        By using IndieBubba.com, you agree to these terms and conditions. If you
        have any questions or concerns, please{' '}
        <a href="mailto:hello@indiebubba.com" style={{ color: 'blue' }}>
          contact us
        </a>
        .
      </MainStyles>

      <Footer />
    </div>
  );
}
