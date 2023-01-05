import RequestReset from '../components/RequestReset';
import PleaseSignIn from '../components/PleaseSignIn';
import UpdateUser from '../components/UpdateUser';
import StripeAccount from '../components/StripeAccount';
import Footer from '../components/Footer';

export default function AccountPage() {
  return (
    <PleaseSignIn>
      <StripeAccount />
      <UpdateUser />
      <RequestReset />
      <Footer />
    </PleaseSignIn>
  );
}
