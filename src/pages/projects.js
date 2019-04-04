import React from "react"
import Layout from "../components/layout/dynamic_layout"
import SEO from "../components/meta_data/seo"
import { Link, graphql } from "gatsby"
import PageTitle from "../components/text/page_title"

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
      <PageTitle titleText="Projects" />
      <div>
        {allArticles.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={`projects${node.fields.slug}`}>
              <h3>{node.frontmatter.title}</h3>
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
