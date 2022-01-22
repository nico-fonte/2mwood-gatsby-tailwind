const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:100,200,300,400,500,600,700,800,900`
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ 
        }
      }
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -200,
        duration: 5000,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-smoothscroll`,
    `react-scrollspy`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
};
