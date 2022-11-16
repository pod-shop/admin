import { ReactNode, useEffect } from 'react'
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Layout from '@/components/layouts/Layout'
import { NextPageWithLayout } from '@/pages/_app'
import client from '@/graphql/client';
import OrderDetails from '@/modules/orders/details';
import { OrderDetails as OrderDetailsType, StaticPaths } from '@/types/index';
import { OrderDocument, OrderQuery, OrdersDocument, OrdersIdQuery } from '@/graphql/generated';
import parseStaticPaths from '@/utils/parseStaticPaths';

const OrderPage: NextPageWithLayout = (props) => {
  const { t } = useTranslation('home');
  const router = useRouter();
  const { id } = router.query;
  const { order } = props as { order: NonNullable<OrderDetailsType> }

  useEffect(() => {
    if (typeof document !== undefined) {
      const el: HTMLDivElement | null = document.querySelector('.content-main')
      if (el) {
        el.style.maxWidth = 'max-width: 1200px'
      }
    }
  }, [])

  return (
    <>
      <NextSeo title={t('title')} description={t('description')} />
      <>
        <div className="content-header">
          <h2 className="content-title">Order detail</h2>
        </div>
        <div className="card">
          <OrderDetails order={order} />
        </div>
      </>
    </>
  )
}

OrderPage.getLayout = (page: ReactNode) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, loading, error } = await client.query<OrdersIdQuery>({ query: OrdersDocument });
  const orders = data?.orders ?? [];

  const paths: StaticPaths = parseStaticPaths(orders);

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale, params }: GetStaticPropsContext) => {
  const { data, loading, error } = await client.query<OrderQuery>({ query: OrderDocument, variables: { id: params?.id } });
  const order = data?.order ?? {};

  return {
    props: {
      ...(await serverSideTranslations(
        (locale || defaultLocale || 'es'),
        ['common', 'home', 'header', 'footer']
      )),
      order
    },
  }
}

export default OrderPage
