import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Persona`,
    description: `Description Persona`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'bwlfymvi',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
