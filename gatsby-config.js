module.exports = {
  siteMetadata: {
    title: `Choosing Our Adventure`,
    description: `COA with WP + WPGraphQL + Gatsby`,
    author: `@jedifunk`,
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
          url: `https://choosingouradventure.com/graphql`,
      },  
    },
/*
    {
      resolve: 'gatsby-wpgraphql-inline-images',
      options: {
        wordPressUrl: 'https://choosingouradventure.com/',
        uploadsUrl: 'https://choosingouradventure.com/wp-content/uploads/',
        processPostTypes: ['Page', 'Post'],
        graphqlTypeName: 'WPGraphQL',
      },
    },
*/
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
