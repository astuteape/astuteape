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

    return (
      <nav>
        <ul className="primary-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
        {this.props.children}
      </nav>
    )
  }
}

export default PrimaryNav
