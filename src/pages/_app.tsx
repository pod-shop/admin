import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { appWithTranslation } from 'next-i18next'
import withTranslateRoutes from 'next-translate-routes'
import { SWRConfig } from 'swr'
import { NextPage } from 'next'
import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { ApolloProvider } from '@apollo/client'
import client from '@/graphql/client'
import SEO from '@/next-seo.config'
import fetcher from '@/utils/fetcher'
import '@/styles/globals.scss'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const { locale, defaultLocale } = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      if ('active' === localStorage?.getItem('darkmode')) {
        if (!document?.body?.className?.includes('dark')) {
          document.body.classList.add('dark')
        }
      }

      require('bootstrap/dist/js/bootstrap');
    }
  }, [])

  return <>
    <DefaultSeo {...SEO} />
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <SWRConfig
          value={{
            fetcher
          }}
        >
          {getLayout(<Component {...pageProps} />)}
        </SWRConfig>
      </SessionProvider>
    </ApolloProvider>
  </>
}

export default withTranslateRoutes(appWithTranslation(MyApp))
