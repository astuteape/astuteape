import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/blog_layout"
import SEO from "../components/meta_data/seo"
import PageTitle from "../components/text/page_title"

const BlogPage = ({ data }) => {
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
      <div className="page-title">
        <PageTitle titleText="BLOG" />
      </div>
      {allArticles.edges.map(({ node }) => (
        <div className="blog-post" key={node.id}>
          <Link to={`/blog${node.fields.slug}`}>
            <h3 className="blog-post-title">{node.frontmatter.title}</h3>
            <ul className="blog-post-data">
              <li>{`By ${node.frontmatter.author}`}</li>
              <li>{`${node.frontmatter.date} | `}</li>
              <li>
                {/* Pluralize Read Time if > 1 miute */}
                {node.timeToRead > 1
                  ? `Read Time ${node.timeToRead} minutes`
                  : `Read Time ${node.timeToRead} minute`}
              </li>
            </ul>
            <p className="blog-post-summary">
              {/* Display a summary from the post front matter. 
                If none exists, an exerpt is pulled from the post */}
              {node.frontmatter.summary
                ? node.frontmatter.summary
                : node.excerpt}
            </p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

// All posts generated from Markdown and filtered by those in the /content/blog directory
export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
          excerpt(pruneLength: 140)
          fields {
            slug
          }
        }
      }
    }
  }
`
export default BlogPage
