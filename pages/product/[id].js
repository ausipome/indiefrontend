import SingleProduct from '../../components/SingleProduct';
import PleaseSignIn from '../../components/PleaseSignIn';

export default function SingleProductPage({ query }) {
  return (
    <>
      <PleaseSignIn>
        <SingleProduct id={query.id} />
      </PleaseSignIn>
    </>
  );
}
