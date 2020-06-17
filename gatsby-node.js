const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allServices: allMdx(filter: { frontmatter: { type: { ne: "blog" }}}) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      allBlogPosts: allMdx(filter: { frontmatter: { type: { eq: "blog" }}}) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
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

  result.data.allBlogPosts.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
