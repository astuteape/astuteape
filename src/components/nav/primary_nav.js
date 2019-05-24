import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const PrimaryNav = () => {
  return (
    <nav className="navbar">
      {/* Divs for style only. Replicate linear gradient
      but avoids fuzzy stops in edge */}
      <div className="stripe-accent" />
      <div className="stripe-light" />
      <div className="stripe-midtone" />
      <ul className="primary-nav">
        <li>
          <AniLink fade to="/" activeClassName="active">
            Home
          </AniLink>
        </li>
        <li>
          <AniLink
            fade
            to="/writing"
            activeClassName="active"
            partiallyActive={true}
          >
            Writing
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
          <AniLink fade to="/contact" activeClassName="active">
            Contact
          </AniLink>
        </li>
      </ul>
    </nav>
  )
}

export default PrimaryNav
