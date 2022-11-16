import { ReactNode, useEffect } from 'react'
import type { GetStaticProps, GetStaticPropsContext } from 'next'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { NextPageWithLayout } from '@/pages/_app'
import Layout from '@/components/layouts/Layout'
import ProductsForm from '@/modules/products/form';

const NewProductPage: NextPageWithLayout = () => {
  const { t } = useTranslation('home');

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

        <ProductsForm />
      </>
    </>
  )
}

NewProductPage.getLayout = (page: ReactNode) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale, defaultLocale, params }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(
        (locale || defaultLocale || 'es'),
        ['common', 'home', 'header', 'footer']
      ))
    },
  }
}

export default NewProductPage
