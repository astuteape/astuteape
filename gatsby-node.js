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
    const blogPath = new RegExp("\\/content\\/blog\\/")
    const projectsPath = new RegExp("\\/content\\/projects\\/")
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (blogPath.test(node.fileAbsolutePath)) {
        createPage({
          path: `/blog${node.fields.slug}`,
          component: path.resolve(`./src/templates/blog_detail.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      } else if (projectsPath.test(node.fileAbsolutePath)) {
        createPage({
          path: `/projects${node.fields.slug}`,
          component: path.resolve(`./src/templates/project_detail.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      }
    })
  })
}
