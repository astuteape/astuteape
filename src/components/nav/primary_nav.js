import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class PrimaryNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeLink: "home",
    }
  }

  handleClick = event => {
    let title = event.target.dataset.title
    this.setState({
      activeLink: title,
    })
  }

  render() {
    return (
      <nav className={`navbar ${this.state.activeLink}`}>
        <ul className="primary-nav">
          <li>
            <AniLink
              fade
              to="/"
              activeClassName="active"
              data-title="home"
              onClick={this.handleClick}
            >
              Home
            </AniLink>
          </li>
          <li>
            <AniLink
              fade
              to="/blog"
              activeClassName="active"
              partiallyActive={true}
              data-title="blog"
              onClick={this.handleClick}
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
              data-title="projects"
              onClick={this.handleClick}
            >
              Projects
            </AniLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default PrimaryNav
