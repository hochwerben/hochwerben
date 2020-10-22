require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `Hochwerben.de`,
    description: ` Digitaldruck, Werbeträger und Webdesign aus Mörfelden-Walldorf.`,
    author: `hochwerben`,
    twitterUsername: '@hochwerben',
    image: '/logo.jpg',
    siteUrl: 'https://hochwerben.de',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID, // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        googleTagManager: {
          trackingId: '', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        facebookPixel: {
          pixelId: '', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    // {
    //   resolve: `gatsby-plugin-gtag`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    //     anonymize: true,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `leistungen-mdx`,
        path: `${__dirname}/src/leistungen-mdx`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://hochwerben.de',
        sitemap: 'https://hochwerben.de/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f49402`,
        theme_color: `#f49402`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-shopify-buy`,
      options: {
        stores: {
          anyKeyForYourStore: {
            domain: `hochwerben.myshopify.com`,
            accessToken: `7c17773375ca31f8045748b766dcb41b`,
          },
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
