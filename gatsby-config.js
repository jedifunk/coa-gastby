const Config = require('./config')

module.exports = {
  siteMetadata: {
    title: `Choosing Our Adventure`,
    description: `The travel adventures of one man trying to make his way around the world.`,
    url: 'https://choosingouradventure.com',
    author: `@jedifunk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
          typeName: `WPGraphQL`,
          fieldName: `wpgraphql`,
          url: Config.source.url + '/graphql',
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: require(`./create/algolia.js`),
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: Config.social.iGUsername,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      }
    },
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
