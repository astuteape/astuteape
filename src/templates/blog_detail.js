import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/dynamic_layout"

export default ({ data }) => {
  const article = data.markdownRemark
  const timeToRead =
    article.timeToRead !== 1
      ? `Read Time: ${article.timeToRead} minutes`
      : `Read Time: ${article.timeToRead} minute`

  return (
    <Layout>
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
              <strong>{timeToRead}</strong>
            </span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
      }
      timeToRead
    }
  }
`
