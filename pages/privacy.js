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
          Privacy Statement <br />
          Statement
          <h2 style={{ marginTop: '12px' }}>
            IndieBubba.com is committed to protecting the privacy of our
            customers. <br />
            This statement outlines our privacy practices for the information
            collected through our buy and sell marketplace.
          </h2>
        </HeadStyle>
        <ol>
          <li>
            <span style={{ fontWeight: 'bold' }}>Information Collected</span>{' '}
            <br /> We only collect information that is necessary for maintaining
            customer accounts and completing transactions. This includes:
            <br /> a. Contact information, such as name, email address, and
            shipping address.
            <br /> b. Payment information, such as credit card numbers and
            billing addresses.
            <br /> c. Order details, such as the products purchased and order
            history.
            <br /> d. Communications with our customer support team.
            <br /> We do not collect or store any sensitive personal
            information, such as social security numbers or government-issued
            IDs.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Use of Information</span>{' '}
            <br /> We use the information collected to:
            <br /> a. Process transactions and fulfill orders.
            <br /> b. Communicate with customers about their orders and account
            status.
            <br /> a. Respond to customer inquiries and support requests.
            <br /> b. Improve our services and user experience.
            <br /> a. Comply with legal obligations and prevent fraudulent
            activity.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>
              Disclosure of Information
            </span>
            <br />
            We do not sell, rent, or share customer information with any third
            parties for marketing purposes. We may share information with
            service providers who assist us in processing transactions or
            delivering orders, but they are not authorized to use the
            information for any other purpose.
            <br /> We may also disclose information if required by law or to
            protect our legal rights or the rights of our customers.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Data Security</span>
            <br /> We take reasonable measures to protect customer information
            from unauthorized access, alteration, or disclosure. This includes
            using encryption to secure sensitive information and limiting access
            to customer data to authorized personnel only.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>
              Updates to Privacy Statement
            </span>
            <br /> We may update this privacy statement from time to time to
            reflect changes in our practices or legal requirements. We encourage
            customers to review this statement periodically.
          </li>

          <li>
            <span style={{ fontWeight: 'bold' }}>Contact Information</span>
            <br /> If you have any questions or concerns about our privacy
            practices, please{' '}
            <a href="mailto:hello@indiebubba.com" style={{ color: 'blue' }}>
              contact us.
            </a>
          </li>
        </ol>
      </MainStyles>

      <Footer />
    </div>
  );
}
