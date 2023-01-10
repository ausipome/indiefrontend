import { useRouter } from 'next/dist/client/router';
import Pagination from '../../components/Pagination';
import Products from '../../components/Products';
import Footer from '../../components/Footer';

export default function OrderPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div style={{ textAlign: 'center', marginTop: '25px' }}>
      <Products page={page || 1} />
      <Pagination page={page || 1} />
      <Footer />
    </div>
  );
}
