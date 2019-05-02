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
      {/* Apply content layout rules to outermost div *-container */}
      <div className="projects-container">
        <section className="main-header">
          <PageTitle titleText="Projects" />
          <DarkMode />
        </section>

        <section className="main-content projects">
          {allArticles.edges.map(({ node }) => (
            <div key={node.id}>
              <div className="collection-item">
                <AniLink fade to={`/projects${node.fields.slug}`}>
                  <div className="feature-image">
                    <Img
                      fluid={
                        node.frontmatter.featureImage.childImageSharp.fluid
                      }
                    />
                  </div>
                  <div className="collection-item-info">
                    <h3 className="collection-item-title">
                      {node.frontmatter.title}
                    </h3>
                    <h4>Project Type: {node.frontmatter.projectType}</h4>
                  </div>
                </AniLink>
                <p className="collection-item-summary">
                  {node.frontmatter.summary
                    ? node.frontmatter.summary
                    : node.excerpt}
                </p>
                <AniLink fade to={`/projects${node.fields.slug}`}>
                  <div className="button-container">
                    <p className="button-text">View =></p>
                  </div>
                </AniLink>
              </div>
            </div>
          ))}
        </section>
        <section className="main-footer">
          <SocialNav />
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { fields: [frontmatter___projectPosition], order: ASC }
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
            projectType
            projectPosition
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
