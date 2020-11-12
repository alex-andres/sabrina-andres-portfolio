const path = require(`path`);
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: "Gatsby Contentful starter",
    description: "Sabrina Andres offers Art Consulting services in the Los Angeles and Pasadena area, contact her today to find up and coming artists",
    siteUrl: "https://sabrinaandres.com",
    image: "./static/images/logo-1024.png",
    banner: "./static/images/logo-1024.png"
  },
  pathPrefix: "/gatsby-contentful-starter",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sabrina Andres - Los Angeles Art Consultant',
        short_name: 'Sabrina Andres Art Consultant',
        description:
          'Sabrina Andres offers Art Consulting services in the Los Angeles and Pasadena area, contact her today to find up and coming artists',
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#f1f1ef',
        display: 'standalone',
        icon: 'src/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'static', 'images'),
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },

    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Playfair Display', 'Raleway'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: path.join(__dirname, 'static', 'images', 'header'), // wherever background images are stored
      },
    },
  ],
};
