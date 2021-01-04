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

  console.log(author);

  return (
    <Layout>
      <h1>Contact Pages</h1>
    </Layout>
  );
}

export const query = graphql`
  {
    site {
      meta: siteMetadata {
        author
        data
      }
    }
  }
`;

export default contact;
