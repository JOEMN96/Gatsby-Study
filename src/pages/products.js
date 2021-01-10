import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../Components/Layout";
import Img from "gatsby-image";

const ComponentName = ({
  data: {
    allContentfulGatsbyTest: { nodes },
  },
}) => {
  console.log(nodes);
  return (
    <Layout>
      <div className="prodaContainer">
        {nodes.map((node) => {
          return (
            <div className="singleImgComp">
              <div className="singleImgComp__img">
                <Img fluid={node.image.fluid}></Img>
              </div>
              <div className="singleImgComp__detail">
                <p>{node.text}</p>
                <p>$ {node.price}</p>
              </div>
              <Link className="singleImg__Link" to={`products/${node.slug}`}>
                Learn More
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulGatsbyTest {
      nodes {
        price
        text
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

export default ComponentName;
