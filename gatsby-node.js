const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              fileAbsolutePath
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    const writingPath = new RegExp("\\/content\\/writing\\/")
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (writingPath.test(node.fileAbsolutePath)) {
        createPage({
          path: `/writing${node.fields.slug}`,
          component: path.resolve(`./src/templates/article_detail.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      }
    })
  })
}
