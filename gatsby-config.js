/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "gatsby tut",
    description: "hello there",
    author: "John Doe",
    data: [1, 2, 3, 4],
    person: {
      Name: "joe",
      age: 17,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Images`,
        path: `${__dirname}/src/Images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images2`,
        path: `${__dirname}/src/images2/`,
      },
    },
  ],
};
