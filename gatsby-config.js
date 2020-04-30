module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `Tutor-X`,
    description: `The Largest Open Source Platform for Students and Knowledge Seekers!`,
    author: `@olanetsoft`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tutor-X`,
        short_name: `Tutor-X`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tutorLogo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``,
        head: true,
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Economica:400,300,300italic,400italic,700,700italic', 'Economica+Sans:400,700']
          // families: ['Merriweather:400,300,300italic,400italic,700,700italic', 'Merriweather+Sans:400,700']
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
