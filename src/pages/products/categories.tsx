import { ReactNode } from 'react'
import type { GetStaticProps, GetStaticPropsContext } from 'next'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/layouts/Layout'
import { NextPageWithLayout } from '@/pages/_app'
import { NextSeo } from 'next-seo';
import Categories from '@/modules/products/categories';
import { useCategoriesQuery } from '@/graphql/generated';

const CategoriesPage: NextPageWithLayout = () => {
  const { t } = useTranslation('home');
  const { data, loading, error } = useCategoriesQuery();
  const categories = data?.categories || [];

  return (
    <>
      <NextSeo title={t('title')} description={t('description')} />
      <>
        <div className="content-header">
          <h2 className="content-title">Categories</h2>
        </div>

        <Categories categories={categories} />
      </>
    </>
  )
}

CategoriesPage.getLayout = (page: ReactNode) => {
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

export default CategoriesPage
