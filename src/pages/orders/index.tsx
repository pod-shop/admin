import { ReactNode } from 'react';
import type { GetStaticProps, GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/layouts/Layout';
import { NextPageWithLayout } from '@/pages/_app';
import { NextSeo } from 'next-seo';
import Orders from '@/modules/orders';
import { useOrdersQuery } from '@/graphql/generated';

const OrdersPage: NextPageWithLayout = () => {
  const { t } = useTranslation('home');
  const { data, loading, error } = useOrdersQuery();
  const orders = data?.orders ?? [];

  return (
    <>
      <NextSeo title={t('title')} description={t('description')} />
      <>
        <div className="content-header">
          <h2 className="content-title">Orders</h2>
          {/* <div>
            <a href="#" className="btn btn-primary"><i className="material-icons md-plus"></i> Create new</a>
          </div> */}
        </div>

        <div className="card mb-4">
          <header className="card-header">
            <div className="row gx-3">
              <div className="col-lg-4 col-md-6 me-auto">
                <input type="text" placeholder="Search..." className="form-control" />
              </div>
              <div className="col-lg-2 col-6 col-md-3">
                <select className="form-select">
                  <option>Status</option>
                  <option>Active</option>
                  <option>Disabled</option>
                  <option>Show all</option>
                </select>
              </div>
              <div className="col-lg-2 col-6 col-md-3">
                <select className="form-select">
                  <option>Show 20</option>
                  <option>Show 30</option>
                  <option>Show 40</option>
                </select>
              </div>
            </div>
          </header>

          <div className="card-body">
            <Orders orders={orders} />
          </div>
        </div>
      </>
    </>
  )
}

OrdersPage.getLayout = (page: ReactNode) => {
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

export default OrdersPage
