import React from "react"

// From Gatsby
import { graphql } from "gatsby"

// Site components
import DarkMode from "../components/theme/dark_mode"
import Layout from "../components/layout/detail_layout"
import SEO from "../components/meta_data/seo"

export default ({ data }) => {
  const project = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={project.frontmatter.title}
        keywords={[
          `${project.frontmatter.title}`,
          `${project.frontmatter.author}`,
          `${project.frontmatter.keywords}`,
        ]}
      />
      {/* Apply content layout rules to outermost div *-container */}
      <div className="detail-container">
        <section className="detail-header">
          <h1 className="detail-title">{project.frontmatter.title}</h1>
          <DarkMode />
        </section>
        <section
          className="detail-content"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </div>
    </Layout>
  )
}

export const projectQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        keywords
      }
      timeToRead
    }
  }
`
