import React from "react"

// From gatsby
import { graphql } from "gatsby"

// Site components
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
      <div>
        <div>
          <h1 className="page-title">{article.frontmatter.title}</h1>
          <div>
            <span>
              <strong>{`By ${article.frontmatter.author} |`}</strong>
            </span>{" "}
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
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
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
