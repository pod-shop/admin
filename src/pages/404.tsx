import { ReactNode } from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/layouts/Layout';
import notFound from '@/images/not-found.png';

const Page404: NextPageWithLayout = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <div className="row" style={{ marginTop: '60px' }}>
        <div className="col-sm-12">
          <div className="w-50 mx-auto text-center">
            <Image
              src={notFound}
              width="350"
              alt="Page Not Found"
              layout='raw'
            />
            <h3 className="mt-4">Oops! Page not found</h3>
            <p>It&apos;s looking like you may have taken a wrong turn. Don&apos;t worry... it happens to the best of us. Here&apos;s a
              little tip that might help you get back on track.</p>
            <Link href="/" passHref>
              <a className="btn btn-primary mt-4">Back to main</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

Page404.getLayout = (page: ReactNode) => {
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

export default Page404;
