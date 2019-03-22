import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../../styles/modules.css"

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
      <header>
        <h1 className="site-title">{data.site.siteMetadata.title}</h1>
      </header>
    )}
  />
)

export default SiteTitle
