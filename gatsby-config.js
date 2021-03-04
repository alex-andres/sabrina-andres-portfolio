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

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.sabrinaandres.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: "Sabrina Andres Art Advisory",
    description:
      "Sabrina Andres offers exceptional art advisory services in Los Angeles with a focus on contemporary art, ranging from early career to blue chip artists.",
    titleTemplate: "%s - Sabrina Andres Art Advisory",
    siteUrl: "https://sabrinaandres.com",
    ogImage: "./static/logos/og-logo.jpg",
    image: "./static/logos/logo-1024.png",
    banner: "./static/logos/logo-1024.png",
    headline: "test headline",
    siteLanguage: "en",
    ogLanguage: "en",
    author: "Alex Andres",
    twitter: "sabrina_andres_art_advisory",
    facebook: "sabrina_andres_art_advisory",
  },
  pathPrefix: "/gatsby-contentful-starter",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-emotion",
    "gatsby-plugin-advanced-sitemap",
    "gatsby-plugin-preload-fonts",
    "gatsby-plugin-sass",
    "gatsby-plugin-csp",
    {
      resolve: `gatsby-plugin-loadable-components-ssr`,
      options: {
          // Whether replaceHydrateFunction should call ReactDOM.hydrate or ReactDOM.render
          // Defaults to ReactDOM.render on develop and ReactDOM.hydrate on build
          useHydrate: true,
      },
  },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Sabrina Andres - Los Angeles Art Consultant",
        short_name: "Sabrina Andres Art Consultant",
        description:
          "Sabrina Andres offers Art Consulting services in the Los Angeles and Pasadena area, contact her today to find up and coming artists",
        start_url: "/",
        background_color: "#FFF",
        theme_color: "#f1f1ef",
        display: "minimal-ui",
        icon: "src/favicon.png",
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: "static",
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: "sab_rina_n",
        access_token: process.env.INSTAGRAM_API_KEY,
        instagram_id: process.env.INSTAGRAM_API_ID,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAIL_CHIMP_ENDPOINT,
        timeout: 3500,
      },
    },
  ],
};
