import { ReactNode, useEffect } from 'react'
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Layout from '@/components/layouts/Layout'
import { NextPageWithLayout } from '@/pages/_app'
import ProductsForm from '@/modules/products/form';
import client from '@/graphql/client';
import { ProductDocument, ProductQuery, ProductsIdDocument, ProductsIdQuery } from '@/graphql/generated';
import { ProductDetails, StaticPaths } from '@/types/index';
import parseStaticPaths from '@/utils/parseStaticPaths';

const ProductPage: NextPageWithLayout = (props) => {
  const { t } = useTranslation('home');
  const router = useRouter();
  const { id } = router.query;
  const { product } = props as { product: ProductDetails }

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
          <h2 className="content-title">Add product</h2>
          <div>
            <a href="#" className="btn btn-light">Save to draft</a>
            <a href="#" className="btn btn-primary">Publish now</a>
          </div>
        </div>

        <ProductsForm product={product} />
      </>
    </>
  )
}

ProductPage.getLayout = (page: ReactNode) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, loading, error } = await client.query<ProductsIdQuery>({ query: ProductsIdDocument });
  const products = data?.products ?? [];

  const paths: StaticPaths = parseStaticPaths(products);

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale, params }: GetStaticPropsContext) => {
  const { data, loading, error } = await client.query<ProductQuery>({ query: ProductDocument, variables: { id: params?.id } });
  const product = data?.product ?? {};

  return {
    props: {
      ...(await serverSideTranslations(
        (locale || defaultLocale || 'es'),
        ['common', 'home', 'header', 'footer']
      )),
      product
    },
  }
}

export default ProductPage
