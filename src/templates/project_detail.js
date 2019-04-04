import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/dynamic_layout"
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
      <div>
        <div>
          <h1 className="page-title">{project.frontmatter.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: project.html }} />
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
