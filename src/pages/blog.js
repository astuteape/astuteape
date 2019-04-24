import React from "react"

// From Gatsby
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// Site components
import DarkMode from "../components/theme/dark_mode"
import Layout from "../components/layout/layout"
import PageTitle from "../components/text/page_title"
import SEO from "../components/meta_data/seo"
import SocialNav from "../components/nav/social_nav"

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
      <div className="collection-page">
        <PageTitle titleText="Blog" />
        <DarkMode />
      </div>
      <div className="collection-page main-content">
        {allArticles.edges.map(({ node }) => (
          <div className="collection-item" key={node.id}>
            <AniLink fade to={`/blog${node.fields.slug}`}>
              <h3 className="collection-item-title">
                {node.frontmatter.title}
              </h3>
              <ul className="collection-item-info">
                <li>{`${node.frontmatter.date} | `}</li>
                <li>
                  {/* Pluralize Read Time if > 1 miute */}
                  {node.timeToRead > 1
                    ? `Read Time: ${node.timeToRead} minutes`
                    : `Read Time: ${node.timeToRead} minute`}
                </li>
              </ul>
            </AniLink>
            <p className="collection-item-summary">
              {/* Display a summary from the post front matter. 
                If none exists, an exerpt is pulled from the post */}
              {node.frontmatter.summary
                ? node.frontmatter.summary
                : node.excerpt}
            </p>
            <AniLink
              className="button-link"
              fade
              to={`/blog${node.fields.slug}`}
            >
              Read
            </AniLink>
          </div>
        ))}
      </div>
      <div className="collection-page main-footer">
        <SocialNav />
      </div>
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
