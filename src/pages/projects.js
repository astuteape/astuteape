import React from "react"

// From Gatsby
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"

// Site components
import DarkMode from "../components/theme/dark_mode"
import Layout from "../components/layout/layout"
import PageTitle from "../components/text/page_title"
import SEO from "../components/meta_data/seo"
import SocialNav from "../components/nav/social_nav"

const ProjectsPage = ({ data }) => {
  const allArticles = data.allMarkdownRemark

  return (
    <Layout>
      <SEO
        title="projects"
        keywords={[
          "astute ape",
          "wade christensen",
          "projects",
          "portfolio",
          "work",
        ]}
      />
      <div className="collection-page">
        <PageTitle titleText="Projects" />
        <DarkMode />
      </div>
      <div className="collection-page main-content">
        {allArticles.edges.map(({ node }) => (
          <div key={node.id}>
            <div className="collection-item">
              <AniLink fade to={`/projects${node.fields.slug}`}>
                <h3 className="collection-item-title">
                  {node.frontmatter.title}
                </h3>
              </AniLink>
              <p className="collection-item-summary">
                {node.frontmatter.summary
                  ? node.frontmatter.summary
                  : node.excerpt}
              </p>
              <AniLink
                className="button-link"
                fade
                to={`/projects${node.fields.slug}`}
              >
                Read
              </AniLink>
            </div>
          </div>
        ))}
      </div>
      <div className="collection-page main-footer">
        <SocialNav />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
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
          excerpt(pruneLength: 280)
          fields {
            slug
          }
        }
      }
    }
  }
`

export default ProjectsPage
