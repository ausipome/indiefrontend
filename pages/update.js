import UpdateProduct from '../components/UpdateProduct';
import UpdateRule from '../components/UpdateRule';

export default function UpdatePage({ query }) {
  return (
    <div>
      <UpdateRule />
      <UpdateProduct id={query.id} />
    </div>
  );
}
