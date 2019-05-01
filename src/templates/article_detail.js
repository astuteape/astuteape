import React from "react"

// From gatsby
import { graphql } from "gatsby"

// Site components
import DarkMode from "../components/theme/dark_mode"
import Layout from "../components/layout/layout"
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
        <div className="post-detail main-content">
          <div className="post-title">
            <h1>{article.frontmatter.title}</h1>
          </div>
          <div className="post-info">
            <p>
              <strong>{`By ${article.frontmatter.author}`}</strong>
            </p>{" "}
            <p>
              <span>
                <strong>{`Published ${article.frontmatter.date} |`}</strong>
              </span>{" "}
              <span>
                <strong>
                  {article.timeToRead > 1
                    ? `Read Time: ${article.timeToRead} minutes`
                    : `Read Time: ${article.timeToRead} minute`}
                </strong>
              </span>
            </p>
          </div>
          <DarkMode />
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const blogQuery = graphql`
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
