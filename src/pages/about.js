import React from "react";
import Layout from "../Components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

let query = graphql`
  {
    fixed: file(name: { eq: "pexels-arina-krasnikova-6212297" }) {
      childImageSharp {
        img1: fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(name: { eq: "pexels-oleg-magni-1669072" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

function About() {
  let data = useStaticQuery(query);

  return (
    <Layout>
      <h1>About Page</h1>
      <Img fixed={data.fixed.childImageSharp.img1}></Img>
      <div className="image">
        <Img fluid={data.fluid.childImageSharp.fluid}></Img>
      </div>
    </Layout>
  );
}

export default About;
