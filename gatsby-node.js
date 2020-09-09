/* eslint "no-console": "off" */

const path = require("path");

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const pathPrefix = fileNode.sourceInstanceName;
    const slug = createFilePath({
      node,
      getNode,
      basePath: "content/",
    });
    createNodeField({ node, name: "slug", value: `/${pathPrefix}${slug}` });
    createNodeField({ node, name: "sourceInstanceName", value: pathPrefix });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve("src/templates/post.js");

  const markdownQueryResult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              url
            }
          }
        }
      }
    }
  `);

  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors);
    throw markdownQueryResult.errors;
  }

  const postsEdges = markdownQueryResult.data.allMarkdownRemark.edges;
  postsEdges.forEach((edge) => {
    // only create page for markdown with no external url
    if (!edge.node.frontmatter.url) {
      createPage({
        path: edge.node.fields.slug,
        component: postTemplate,
        context: {
          slug: edge.node.fields.slug,
        },
      });
    }
  });
};
