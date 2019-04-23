import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class DarkMode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: `light`,
    }
  }

  setTheme = event => {
    return event.target.checked ? `dark` : `light`
  }

  setDisplayLabel = () => {
    this.setState(prevState => ({
      theme: prevState.theme === `light` ? `dark` : `light`,
    }))
  }

  render() {
    const moon = (
      <svg id="moon" width="13.5" height="22" viewBox="0 0 13.5 22">
        <title>moon</title>
        <path
          d="M16,5a10.83,10.83,0,0,0-2.5.3,11,11,0,0,1,0,21.4A10.83,10.83,0,0,0,16,27,11,11,0,0,0,16,5Z"
          transform="translate(-13.5 -5)"
          fill="#fff"
        />
      </svg>
    )

    const sun = (
      <svg id="sun" width="32" height="32" viewBox="0 0 32 32">
        <title>sun</title>
        <path
          d="M32,20.94,26.87,17.6c0-.22.06-.45.08-.68C28,16.61,29,16.31,30,16c-1.05-.32-2.06-.65-3.05-1,0-.22-.05-.42-.08-.63L32,11.06l-6.11.16c-.1-.22-.21-.43-.32-.64.79-1.08,1.51-2.15,2.17-3.23-1.1.48-2.25,1-3.44,1.45-.13-.15-.26-.3-.4-.44l2-5.3L21.34,6.39l-.1-.06A14.51,14.51,0,0,0,20.33,2a17.41,17.41,0,0,1-1.25,3.44,10.65,10.65,0,0,0-1.49-.31L16,0,14.47,4.93A36.06,36.06,0,0,0,11.67,2a15,15,0,0,1,1,3.51,10.3,10.3,0,0,0-2,.88L6.11,3.06l2,5.29-3-1c.67.78,1.3,1.57,1.9,2.36a9.45,9.45,0,0,0-.88,1.51L0,11.06,5.13,14.4c0,.22-.06.45-.08.68C4,15.39,3,15.69,2,16c1,.32,2.06.65,3.05,1,0,.22,0,.42.08.63L0,20.94l6.11-.16c.1.22.21.43.32.64-.79,1.08-1.51,2.15-2.17,3.23,1.1-.48,2.25-1,3.44-1.45.13.15.26.3.4.44l-2,5.3,4.55-3.33.1.06A14.51,14.51,0,0,0,11.67,30a17.41,17.41,0,0,1,1.25-3.44,10.65,10.65,0,0,0,1.49.31L16,32l1.53-4.93A36.06,36.06,0,0,0,20.33,30a15,15,0,0,1-1-3.51,10.3,10.3,0,0,0,2-.88l4.55,3.33-2-5.29c1,.33,2,.67,3,1-.67-.78-1.3-1.57-1.9-2.36a9.45,9.45,0,0,0,.88-1.51Z"
          fill="#fff"
        />
      </svg>
    )

    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className="toggle">
            <input
              type="checkbox"
              onChange={event => {
                toggleTheme(this.setTheme(event))
                this.setDisplayLabel()
              }}
              checked={theme === `dark`}
            />{" "}
            <span className={this.state.theme === `dark` ? `hide` : `show`}>
              {sun}
            </span>
            <span className={this.state.theme === "dark" ? `show` : `hide`}>
              {moon}
            </span>
            <p>{this.state.theme === `light` ? `Light Mode` : `Dark Mode`}</p>
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkMode
