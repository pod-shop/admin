import { ReactNode } from 'react'
import type { GetStaticProps, GetStaticPropsContext } from 'next'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/layouts/Layout'
import { NextPageWithLayout } from '@/pages/_app'
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import ProductsGrid from '@/modules/products/grid';
import { useProductsQuery } from '@/graphql/generated';

const ProductsPage: NextPageWithLayout = () => {
  const { t } = useTranslation('home');
  const { data, loading, error } = useProductsQuery();
  const products = data?.products ?? [];

  return (
    <>
      <NextSeo title={t('title')} description={t('description')} />
      <>
        <div className="content-header">
          <h2 className="content-title">Products grid</h2>
          <div>
            <a href="#" className="btn btn-light">Export</a>
            <a href="#" className="btn btn-light">Import</a>
            <Link href="/products/new" passHref>
              <a className="btn btn-primary">Create new</a>
            </Link>
          </div>
        </div>

        <header className="card card-body mb-4">
          <div className="row gx-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input type="text" placeholder="Search..." className="form-control" />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>All category</option>
                <option>Electronics</option>
                <option>Clothings</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Latest added</option>
                <option>Cheap first</option>
                <option>Most viewed</option>
              </select>
            </div>
          </div>
        </header>

        <ProductsGrid products={products} />

        <nav className="float-end mt-4" aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </>
    </>
  )
}

ProductsPage.getLayout = (page: ReactNode) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(
        (locale || defaultLocale || 'es'),
        ['common', 'home', 'header', 'footer']
      ))
    },
  }
}

export default ProductsPage
