require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['art', 'art-category'],
  singleTypes: ['about'],
};

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-sass"
  ],
};