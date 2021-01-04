import React from "react";
import Layout from "../Components/Layout";
import { useStaticQuery, graphql } from "gatsby";

let path = graphql`
  {
    site {
      meta: siteMetadata {
        author
        data
        person {
          age
        }
      }
    }
  }
`;

function GraphqlTest() {
  const {
    site: {
      meta: {
        person: { age },
      },
    },
  } = useStaticQuery(path);

  return (
    <Layout>
      <h3>GraphQl Tests </h3>
      <p>{age}</p>
    </Layout>
  );
}

export default GraphqlTest;
