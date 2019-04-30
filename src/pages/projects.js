import React from "react"

// From Gatsby
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import Img from "gatsby-image"

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
      <div className="collection-page main-content project">
        {allArticles.edges.map(({ node }) => (
          <div key={node.id}>
            <div className="collection-item">
              <div>
                <AniLink fade to={`/projects${node.fields.slug}`}>
                  <Img
                    fluid={node.frontmatter.featureImage.childImageSharp.fluid}
                  />
                </AniLink>
              </div>
              <div>
                <AniLink fade to={`/projects${node.fields.slug}`}>
                  <h3 className="collection-item-title">
                    {node.frontmatter.title}
                  </h3>
                </AniLink>
                <h4>Project Type: {node.frontmatter.project_type}</h4>
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
                  View
                </AniLink>
              </div>
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
      sort: { fields: [frontmatter___project_position], order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            summary
            featureImage {
              relativePath
              childImageSharp {
                fluid(maxWidth: 490) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            project_type
            project_position
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
