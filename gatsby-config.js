// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// });
module.exports = {
  siteMetadata: {
    title: `Hochwerben.de - Digitaldruck`,
    description: ` Digitaldruck, Werbeträger und Webdesign aus Mörfelden-Walldorf.`,
    author: `Peter Pawelczyk`,
    twitterUsername: '@hochwerben',
    image: '/logo.jpg',
    siteUrl: 'https://hochwerben.de',
  },
  plugins: [
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
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
        spaceId: `vfukfafpsk72`,
        accessToken: `Q5MlnQZpC4hOKs6oEyiwiVSiLC99vhq0AVM1Lr0g-9E`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
