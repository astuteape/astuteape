import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../../styles/modules.css"

export default () => (
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
        <h1 className="title-text">{data.site.siteMetadata.title}</h1>
      </header>
    )}
  />
)
