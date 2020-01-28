const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Frank Richard Semakula | Portfolio',
    siteUrl: 'https://frankrs.dk/',
    description:
      'Frank is a frontend developer with a wide range of skills within web development and marketing.',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        // path: `${__dirname}/src/images`,
        path: `src/assets/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Frank Richard Semakula',
        short_name: 'FRS - Portfolio',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'portrait',
        icon: 'src/assets/images/favicon.png',
        include_favicon: true,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.resolve(__dirname, 'src/assets/svg'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout'),
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      // options: {
      //   // Override the file regex for SASS
      //   sassRuleTest: /\.global\.s(a|c)ss$/,
      //   // Override the file regex for CSS modules
      //   sassRuleModulesTest: /\.mod\.s[ac]ss$/,
      //   // sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
      // },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-124489759-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // -v- Setting this parameter is optional
        anonymize: true,
        // -v- Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        globPatterns: ['**/*.{js,jsx,jpg,svg,html,css}'],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-root-import',
    //   options: {
    //     src: path.join(__dirname, 'src'),
    //     pages: path.join(__dirname, 'src/pages')
    //   }
    // }
  ],
};
