import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import DarkMode from "../theme/dark_mode"

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
          <AniLink
            fade
            to="/blog"
            activeClassName="active"
            partiallyActive={true}
          >
            Blog
          </AniLink>
        </li>
        <li>
          <AniLink
            fade
            to="/projects"
            activeClassName="active"
            partiallyActive={true}
          >
            Projects
          </AniLink>
        </li>
        <li>
          <DarkMode />
        </li>
      </ul>
    </nav>
  )
}

export default PrimaryNav
