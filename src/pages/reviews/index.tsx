import { ReactNode } from 'react'
import type { GetStaticProps, GetStaticPropsContext } from 'next'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/layouts/Layout'
import { NextPageWithLayout } from '@/pages/_app'
import { NextSeo } from 'next-seo';
import Reviews from '@/modules/reviews';
import { useReviewsQuery } from '@/graphql/generated';

const ReviewsPage: NextPageWithLayout = () => {
  const { t } = useTranslation('home');
  const { data, loading, error } = useReviewsQuery();
  const reviews = data?.reviews ?? [];

  return (
    <>
      <NextSeo title={t('title')} description={t('description')} />
      <>
        <div className="content-header">
          <h2 className="content-title">Reviews</h2>
        </div>

        <div className="card mb-4">
          <header className="card-header">
            <div className="row gx-3">
              <div className="col-lg-4 col-md-6 me-auto">
                <input type="text" placeholder="Search..." className="form-control" />
              </div>
              <div className="col-lg-2 col-md-3 col-6">
                <select className="form-select">
                  <option>Status</option>
                  <option>Active</option>
                  <option>Disabled</option>
                  <option>Show all</option>
                </select>
              </div>
              <div className="col-lg-2 col-md-3 col-6">
                <select className="form-select">
                  <option>Show 20</option>
                  <option>Show 30</option>
                  <option>Show 40</option>
                </select>
              </div>
            </div>
          </header>

          <div className="card-body">
            <Reviews reviews={reviews} />
          </div>

        </div>
      </>
    </>
  )
}

ReviewsPage.getLayout = (page: ReactNode) => {
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

export default ReviewsPage
