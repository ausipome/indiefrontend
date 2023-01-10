import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    productsCount(where: { status: { equals: "AVAILABLE" } })
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return 'Loading...';
  if (error) return <DisplayError error={error} />;
  const count = data.productsCount;
  const pageCount = Math.ceil(count / perPage);
  return (
    <>
      <p style={{ color: 'red' }}>
        Page {page} of {pageCount}
      </p>
      <PaginationStyles>
        <Head>
          <title>
            Indie Bubba - Page {page} of {pageCount}
          </title>
        </Head>
        <Link href={`/products/${page - 1}`}>
          <a aria-disabled={page <= 1}>← Prev</a>
        </Link>
        <Link href={`/products/${page + 1}`}>
          <a aria-disabled={page >= pageCount}>Next →</a>
        </Link>
      </PaginationStyles>
    </>
  );
}
