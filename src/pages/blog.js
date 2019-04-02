import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layouts/dynamic_layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1 className="page-title">Blog</h1>
        <h4>{data.allMarkdownRemark.totalCount} Articles</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}
                <span>— {node.frontmatter.date}</span>
              </h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 140)
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
