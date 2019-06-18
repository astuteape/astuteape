import React from "react"
import { StaticQuery, graphql } from "gatsby"

const SiteTitle = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <h1 className="site-title">{data.site.siteMetadata.title}</h1>
    )}
  />
)

export default SiteTitle
