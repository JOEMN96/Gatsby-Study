import React from "react";
import { graphql } from "gatsby";

const TemplateProducts = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>{data.pro.text}</h1>
      <p>{data.pro.info.info}</p>
    </div>
  );
};

export const query = graphql`
  query SingleProdQuery($slug: String) {
    pro: contentfulGatsbyTest(slug: { eq: $slug }) {
      slug
      price
      text
      info {
        info
      }
    }
  }
`;

export default TemplateProducts;
