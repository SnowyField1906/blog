const siteMetadata = {
  title: 'Blog | SnowyField',
  author: 'SnowyField',
  headerTitle: 'Mere Musings',
  description: 'My personal blog where I share my musings',
  notes: 'Reuseable code notes collected by SnowyField',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://snowyfield.vercel.app/',
  siteRepo: 'https://github.com/SnowyField1906/blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/banner.png',
  email: 'snowyfield1906@gmail.com',
  github: 'https://github.com/SnowyField1906',
  twitter: 'https://twitter.com/SnowyField1906',
  linkedin: 'https://www.linkedin.com/in/NHThuan/',
  website: 'https://snowyfield.vercel.app/',
  locale: 'en-US',
  analytics: {
    umamiWebsiteId: '8cdb28da-322d-4adf-b081-27e579f84252',
    googleAnalyticsId: 'G-KYY35T59NC',
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'snowyfield1906',
  },
}

module.exports = siteMetadata
