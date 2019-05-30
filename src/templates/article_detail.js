import React from "react"

// From gatsby
import { graphql } from "gatsby"

// Site components
import DarkMode from "../components/theme/dark_mode"
import Layout from "../components/layout/detail_layout"
import SEO from "../components/meta_data/seo"

export default ({ data }) => {
  const article = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={article.frontmatter.title}
        keywords={[
          `${article.frontmatter.title}`,
          `${article.frontmatter.author}`,
          `${article.frontmatter.keywords}`,
        ]}
      />
      {/* Apply content layout rules to outermost div *-container */}
      <div className="detail-container">
        <section className="detail-header">
          <div>
            <h1 className="detail-title">{article.frontmatter.title}</h1>
            <ul className="detail-info">
              <li>{`${article.frontmatter.author}`}</li>
              <li>{`\u00A0| ${article.frontmatter.date} |\u00A0`}</li>
              <li>
                {article.timeToRead > 1
                  ? `Read Time: ${article.timeToRead} minutes`
                  : `Read Time: ${article.timeToRead} minute`}
              </li>
            </ul>
          </div>
          <DarkMode />
        </section>
        <section
          className="detail-content"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </div>
    </Layout>
  )
}

export const writingQuery = graphql`
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
