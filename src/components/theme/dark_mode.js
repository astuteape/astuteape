import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class DarkMode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: "Dark Mode",
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      label: !prevState.label,
    }))
  }

  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label class="toggle">
            <input
              type="checkbox"
              onClick={this.handleClick}
              onChange={event =>
                toggleTheme(event.target.checked ? `dark` : `light`)
              }
              checked={theme === `dark`}
            />{" "}
            <span>{this.state.label ? "Light Mode" : "Dark Mode"}</span>
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkMode
