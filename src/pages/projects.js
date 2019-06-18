import React from "react"

// From Gatsby
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import Img from "gatsby-image"

// Site components
import ExperimentsList from "../components/experiment/experiments_list"
import Layout from "../components/layout/layout"
import SEO from "../components/meta_data/seo"

const ProjectsPage = ({ data }) => {
  const allArticles = data.allMarkdownRemark

  return (
    <Layout title="Projects">
      <SEO
        title="Projects"
        keywords={[
          "astute ape",
          "wade christensen",
          "projects",
          "portfolio",
          "work",
        ]}
      />
      {/* Apply content layout rules to outermost div *-container */}
      <div className="multi-container projects">
        <section className="projects-list">
          <h2 className="section-subhead">Showcase</h2>
          {allArticles.edges.map(({ node }) => (
            <div className="collection-item" key={node.id}>
              <div className="feature-image">
                <AniLink fade to={`/projects${node.fields.slug}`}>
                  <Img
                    fluid={node.frontmatter.featureImage.childImageSharp.fluid}
                  />
                </AniLink>
              </div>
              <div className="collection-item-info">
                <AniLink fade to={`/projects${node.fields.slug}`}>
                  <h3 className="collection-item-title">
                    {node.frontmatter.title}
                  </h3>
                  <h4 className="collection-item-type">
                    Project Type: {node.frontmatter.projectType}
                  </h4>
                </AniLink>
                <p className="collection-item-summary">
                  {node.frontmatter.summary
                    ? node.frontmatter.summary
                    : node.excerpt}
                </p>
              </div>
              <AniLink fade to={`/projects${node.fields.slug}`}>
                <button>View</button>
              </AniLink>
            </div>
          ))}
        </section>
        <section className="experiments-list">
          <h2 className="section-subhead">Experiments</h2>
          <div>
            <ExperimentsList />
          </div>
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
