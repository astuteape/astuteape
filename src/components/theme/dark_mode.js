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
    const moon = (
      <svg width="32" height="32" viewBox="0 0 21 32">
        <path
          d="M10.5,0a15.87,15.87,0,0,0-5,.81,16,16,0,0,1,0,30.38A16,16,0,1,0,10.5,0Z"
          transform="translate(-5.5)"
          fill="#fff"
        />
      </svg>
    )

    const sun = (
      <svg width="32" height="32" viewBox="0 0 32 32">
        <path
          d="M16,0l1.47,7.67a.2.2,0,0,0,.36.08l4.29-6.53L20.54,8.87a.2.2,0,0,0,.31.2l6.46-4.38-4.38,6.46a.2.2,0,0,0,.2.31l7.65-1.58-6.53,4.29a.2.2,0,0,0,.08.36L32,16l-7.67,1.47a.2.2,0,0,0-.08.36l6.53,4.29-7.65-1.58a.2.2,0,0,0-.2.31l4.38,6.46-6.46-4.38a.2.2,0,0,0-.31.2l1.58,7.65-4.29-6.53a.2.2,0,0,0-.36.08L16,32l-1.47-7.67a.2.2,0,0,0-.36-.08L9.88,30.78l1.58-7.65a.2.2,0,0,0-.31-.2L4.69,27.31l4.38-6.46a.2.2,0,0,0-.2-.31L1.22,22.12l6.53-4.29a.2.2,0,0,0-.08-.36L0,16l7.67-1.47a.2.2,0,0,0,.08-.36L1.22,9.88l7.65,1.58a.2.2,0,0,0,.2-.31L4.69,4.69l6.46,4.38a.2.2,0,0,0,.31-.2L9.88,1.22l4.29,6.53a.2.2,0,0,0,.36-.08Z"
          fill="#fff"
        />
      </svg>
    )

    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label class="toggle">
            <ul>
              {this.state.label === `dark` ? <li>{sun}</li> : <li>{moon}</li>}
            </ul>
            <input
              type="checkbox"
              onClick={this.setLabel}
              onChange={event =>
                toggleTheme(event.target.checked ? `dark` : `light`)
              }
              checked={theme === `dark`}
            />{" "}
            <span>{this.state.label === `dark` ? `Light` : `Dark`}</span>
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkMode
