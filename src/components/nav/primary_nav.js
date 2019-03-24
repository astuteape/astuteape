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
