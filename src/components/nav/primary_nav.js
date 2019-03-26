import React from "react"
import { Link } from "gatsby"

const NavLink = props => {
  return (
    <li>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}

const PrimaryNav = ({ children }) => {
  return (
    <nav>
      <button className="mobile-nav-button">
        <svg width="32" height="32" viewBox="0 0 16 16">
          <path
            fill="#000000"
            d="M1 3h14v3h-14zM1 7h14v3h-14zM1 11h14v3h-14z"
          />
        </svg>
      </button>
      <ul className="primary-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
      {children}
    </nav>
  )
}

export default PrimaryNav
