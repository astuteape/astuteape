import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const PrimaryNav = () => {
  return (
    <nav className="navbar">
      <ul className="primary-nav">
        <li>
          <AniLink fade to="/" activeClassName="active">
            Home
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/blog" activeClassName="active">
            Blog
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/projects" activeClassName="active">
            Projects
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/contact" activeClassName="active">
            Contact
          </AniLink>
        </li>
      </ul>
    </nav>
  )
}

export default PrimaryNav
