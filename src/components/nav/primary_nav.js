import React from "react"
import { Link } from "gatsby"

class PrimaryNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavVisible: false,
    }
  }

  handleNavClick = props => {
    this.setState(state => ({
      isNavVisible: !state.isNavVisible,
    }))
  }

  render() {
    const NavLink = props => (
      <li>
        <Link to={props.to}>{props.children}</Link>
      </li>
    )

    if (this.state.isNavVisible) {
    }

    return (
      <nav>
        <ul className="primary-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
        {this.props.children}
      </nav>
    )
  }
}

export default PrimaryNav
