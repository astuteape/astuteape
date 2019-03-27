import React from "react"
import { Link } from "gatsby"

export default class PrimaryNav extends React.Component {
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

    let buttonClass = ["mobile-nav-button"]
    if (this.state.isNavVisible) {
      buttonClass.push("isNavVisible")
    }

    return (
      <nav>
        <button className={buttonClass.join(" ")} onClick={this.handleNavClick}>
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
        {this.props.children}
      </nav>
    )
  }
}
