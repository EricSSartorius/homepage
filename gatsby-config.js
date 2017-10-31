module.exports = {
  siteMetadata: {
    title: `Eric Sartorius`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-image`,
    `gatsby-plugin-react-next`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'www.iamtheepic.com',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        auth: {
          htaccess_user: 'eric@2sbros.com',
          htaccess_pass: 'Kimchiplease!1',
          htaccess_sendImmediately: false,
        },
        verboseOutput: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-71581610-1',
        anonymize: true
      },
    },
    'gatsby-transformer-remark'
  ],
}
