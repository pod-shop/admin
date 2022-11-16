import { DefaultSeoProps } from 'next-seo';

export default {
  titleTemplate: '%s - Crealo Admin',
  defaultTitle: 'Crealo Admin',
  dangerouslySetAllPagesToNoFollow: true,
  dangerouslySetAllPagesToNoIndex: true,
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: '/images/favicon.ico',
      type: 'image/x-icon'
    },
    {
      rel: 'manifest',
      href: '/manifest.json'
    },
  ],
  robotsProps: {
    nosnippet: true,
    notranslate: true,
    noimageindex: true,
    noarchive: true,
    maxSnippet: -1,
    maxImagePreview: 'none',
    maxVideoPreview: -1,
  }
} as DefaultSeoProps;
