import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class DarkMode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: `dark`,
    }
  }

  setLabel = () => {
    this.setState(prevState => ({
      label: prevState.label === `dark` ? `light` : `dark`,
    }))
  }

  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label class="toggle">
            <input
              type="checkbox"
              onClick={this.setLabel}
              onChange={event =>
                toggleTheme(event.target.checked ? `dark` : `light`)
              }
              checked={theme === `dark`}
            />{" "}
            <span>
              {this.state.label === `dark` ? `Light Mode` : `Dark Mode`}
            </span>
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkMode
