import React from "react"

// From Gatsby
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// Site components
import DarkMode from "../components/theme/dark_mode"
import Layout from "../components/layout/layout"
import PageTitle from "../components/text/page_title"
import SEO from "../components/meta_data/seo"
import SocialNav from "../components/nav/social_nav"
import ArticleList from "../components/text/article_list"

const WritingPage = ({ data }) => {
  const allArticles = data.allMarkdownRemark

  return (
    <Layout>
      <SEO
        title="Writing"
        keywords={[
          `astute ape`,
          `wade christensen`,
          `writing`,
          `blog`,
          `articles`,
          `writing`,
          `tutorials`,
        ]}
      />
      {/* Apply content layout rules to outermost div *-container */}
      <div className="writing-container">
        <section className="main-header">
          <PageTitle titleText="Writing" />
          <DarkMode />
        </section>

        <section className="main-content writing">
          {/* Left column */}
          <div className="aa-articles-list">
            {allArticles.edges.map(({ node }) => (
              <div className="collection-item" key={node.id}>
                <AniLink fade to={`/writing${node.fields.slug}`}>
                  <h3 className="collection-item-title">
                    {node.frontmatter.title}
                  </h3>
                  <ul className="collection-item-info">
                    <li>{`${node.frontmatter.date} |\u00A0`}</li>
                    <li>
                      {/* Pluralize Read Time if > 1 miute */}
                      {node.timeToRead > 1
                        ? `Read Time: ${node.timeToRead} minutes`
                        : `Read Time: ${node.timeToRead} minute`}
                    </li>
                  </ul>
                </AniLink>
                <p className="collection-item-summary">
                  {/* Display a summary from the post front matter. 
                If none exists, an exerpt is pulled from the post */}
                  {node.frontmatter.summary
                    ? node.frontmatter.summary
                    : node.excerpt}
                </p>
                <AniLink fade to={`/writing${node.fields.slug}`}>
                  <div className="button-container">
                    <p className="button-text">Read =></p>
                  </div>
                </AniLink>
              </div>
            ))}
          </div>
          {/* Right column */}
          <div className="external-articles-list">
            <h2>Articles for Other Publications</h2>
            <ArticleList />
          </div>
        </section>
        <section className="main-footer">
          <SocialNav />
        </section>
      </div>
    </Layout>
  )
}

// All posts generated from Markdown and filtered by those in the /content/writing directory
export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/writing/" } }
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
          excerpt(pruneLength: 140)
          fields {
            slug
          }
        }
      }
    }
  }
`
export default WritingPage