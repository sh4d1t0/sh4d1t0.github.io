module.exports = {
  siteMetadata: {
    siteUrl: 'https://sh4d1t0.github.io',
    title: 'Portafolio Shadito',
    description: 'A project with React GatsbyJS and TypeScript with Testing using Atomic Design',
    author: 'Shadito',
  },
  // pathPrefix: 'gatsby-typescript-testing',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Portafolio',
        short_name: 'Portafolio',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#2563EB',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
