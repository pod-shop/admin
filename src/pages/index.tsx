import { ReactNode, useEffect } from 'react'
import type { GetStaticProps, GetStaticPropsContext } from 'next'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/layouts/Layout'
import { NextPageWithLayout } from '@/pages/_app'
import { NextSeo } from 'next-seo';
import Dashboard from '@/modules/dashboard';
import { useStatisticQuery } from '@/graphql/generated';

const DashboardPage: NextPageWithLayout = () => {
  const { t } = useTranslation('home');
  const { data, loading, error } = useStatisticQuery();
  const statistic = data?.statistic ?? {};

  useEffect(() => {
    console.log(JSON.stringify(statistic))
  }, [data])

  return (
    <>
      <NextSeo title={t('title')} description={t('description')} />
      <>
        <div className="content-header">
          <h2 className="content-title"> Dashboard </h2>
          <div>
            <a href="#" className="btn btn-primary">Create report</a>
          </div>
        </div>

        <Dashboard />
      </>
    </>
  )
}

DashboardPage.getLayout = (page: ReactNode) => {
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

export default DashboardPage
