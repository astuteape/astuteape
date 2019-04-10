import React from "react"
import { Link } from "gatsby"

const PrimaryNav = () => {
  return (
    <nav className="navbar">
      <ul className="primary-nav">
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog/" activeClassName="active">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/projects/" activeClassName="active">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact/" activeClassName="active">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default PrimaryNav
