// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`
})

const clientConfig = require("./client-config")

const isProd = process.env.NODE_ENV === "production"

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-transition-link",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Kay Hall Portfolio",
        short_name: "Kay Hall",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#000",
        icon: "src/images/icon.png" // This path is relative to the root of the site.
      }
    }
  ]
}
