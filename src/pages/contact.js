import React from "react";
import Layout from "../Components/Layout";
import { graphql } from "gatsby";

function contact(props) {
  let {
    data: {
      site: {
        meta: { author },
      },
    },
  } = props;

  return (
    <Layout>
      <h1>Contact Pages</h1>
      <p>{author}</p>
    </Layout>
  );
}

export const query = graphql`
  query add {
    site {
      meta: siteMetadata {
        author
        data
      }
    }
  }
`;

export default contact;
