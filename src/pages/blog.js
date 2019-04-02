import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layouts/dynamic_layout"
import SEO from "../components/meta_data/seo"

export default ({ data }) => {
  const allArticles = data.allMarkdownRemark

  return (
    <Layout>
      <SEO
        title="Blog"
        keywords={[
          `astute ape`,
          `wade christensen`,
          `blog`,
          `articles`,
          `writing`,
          `tutorials`,
        ]}
      />

      <div>
        <h1 className="page-title">Blog</h1>
        {allArticles.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
              <p>
                <span>
                  <strong>{`By ${node.frontmatter.author} | `}</strong>
                </span>
                <span>
                  <strong>{`Published ${node.frontmatter.date} | `}</strong>
                </span>
                <span>
                  <strong>
                    {node.timeToRead > 1
                      ? `Read Time ${node.timeToRead} minutes`
                      : `Read Time ${node.timeToRead} minute`}
                  </strong>
                </span>
              </p>
              <p>
                {node.frontmatter.summary
                  ? node.frontmatter.summary
                  : node.excerpt}
              </p>
            </Link>
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
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
            summary
          }
          timeToRead
          excerpt(pruneLength: 280)
          fields {
            slug
          }
        }
      }
    }
  }
`
