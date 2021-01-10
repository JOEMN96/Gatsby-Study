exports.createPages = async ({ actions, graphql }) => {
  const data = await graphql(`
    query AllSlugsQuery {
      products: allContentfulGatsbyTest {
        arr: edges {
          node {
            slug
          }
        }
      }
    }
  `);

  let {
    data: {
      products: { arr },
    },
  } = data;

  arr.forEach((edge) => {
    const slug = edge.node.slug;
    actions.createPage({
      path: `products/${slug}`,
      component: require.resolve(`./src/templates/TemplateProducts.js`),
      context: { slug: slug },
    });
  });
};
