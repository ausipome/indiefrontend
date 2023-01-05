import { useRouter } from 'next/dist/client/router';
import ProductsReview from '../components/ProductsReview';
import PleaseSignIn from '../components/PleaseSignIn';

export default function SellPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <>
      <PleaseSignIn>
        <ProductsReview />
      </PleaseSignIn>
    </>
  );
}
