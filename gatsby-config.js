/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `KUROBO SITE`,
    description: `KUROBOのポートフォリオサイト`,
    lang: `ja`,
    siteUrl: `https://kurobo-site.netlify.app`,
    locale: `ja_JP`,
    fbappid: `1005903543481682`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KUROBO SITE`,
        short_name: `KUROBO`,
        start_url: `/`,
        background_color: `#6f7372`,
        theme_color: `#647356`,
        display: `standalone`,
        icon: `src/images/kurobo.svg`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.microCMS_API_KEY,
        serviceId: "kurobochan-portfolio",
        apis: [
          {
            endpoint: "portfolio",
          },
          {
            endpoint: "category",
          },
        ],
      },
    },
  ],
}
