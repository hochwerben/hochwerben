const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allServices: allMdx(filter: { frontmatter: { type: { eq: "service" }}}) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      getContentfulPosts: allContentfulPost {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.allServices.edges.forEach(({ node }) => {
    createPage({
      path: `/leistungen/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/leistung.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });

  result.data.getContentfulPosts.nodes.forEach(({ slug }) => {
    createPage({
      path: `/blog/${slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: slug,
      },
    });
  });
};
