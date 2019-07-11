import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class DarkMode extends React.Component {
  render() {
    const moon = (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>moon</title>
          <g className="icon">
            <path
              d="M12.16,4.29a11.7,11.7,0,0,0-4,.72,11.7,11.7,0,0,1,0,22,11.71,11.71,0,1,0,4-22.7Z"
              transform="translate(0 0)"
            />
          </g>
          <g className="outline">
            <path
              d="M3.13,23A14.78,14.78,0,0,1,3.13,9l-1-1a16,16,0,0,0,0,16Z"
              transform="translate(0 0)"
            />
            <path
              d="M23,28.87A14.78,14.78,0,0,1,9,28.87l-1,1a16,16,0,0,0,16,0Z"
              transform="translate(0 0)"
            />
            <path
              d="M28.87,9a14.78,14.78,0,0,1,0,14.08l1,1a16,16,0,0,0,0-16Z"
              transform="translate(0 0)"
            />
            <path
              d="M9,3.13A14.78,14.78,0,0,1,23,3.13l1-1a16,16,0,0,0-16,0Z"
              transform="translate(0 0)"
            />
          </g>
        </svg>
        <h4>Dark Mode</h4>
      </div>
    )

    const sun = (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>sun</title>
          <g className="icon">
            <path
              d="M28.87,20l-4.13-2.69c0-.18.05-.37.07-.55.83-.25,1.66-.49,2.45-.74l-2.45-.78c0-.17,0-.34-.07-.51L28.87,12,24,12.15c-.09-.17-.17-.34-.27-.51.64-.86,1.22-1.73,1.75-2.6-.88.39-1.81.78-2.76,1.17-.11-.12-.21-.24-.32-.35L24,5.59,20.29,8.27l-.08,0a11.7,11.7,0,0,0-.73-3.48,13.45,13.45,0,0,1-1,2.77,7.61,7.61,0,0,0-1.19-.25L16,3.13l-1.23,4a28.81,28.81,0,0,0-2.25-2.36,11.56,11.56,0,0,1,.82,2.82,8.47,8.47,0,0,0-1.63.71L8.05,5.59,9.64,9.85,7.22,9c.54.63,1,1.27,1.53,1.9A9.13,9.13,0,0,0,8,12.15L3.13,12l4.13,2.69c0,.18,0,.37-.07.55-.83.25-1.66.49-2.45.74l2.45.78c0,.17,0,.34.07.51L3.13,20,8,19.85c.09.17.17.34.27.51-.64.86-1.22,1.73-1.75,2.6.88-.39,1.81-.78,2.76-1.17.11.12.21.24.32.35L8.05,26.41l3.66-2.68.08.05a11.7,11.7,0,0,0,.73,3.48,13.45,13.45,0,0,1,1-2.77,7.61,7.61,0,0,0,1.19.25L16,28.87l1.23-4a28.81,28.81,0,0,0,2.25,2.36,11.56,11.56,0,0,1-.82-2.82,8.47,8.47,0,0,0,1.63-.71L24,26.41l-1.59-4.26,2.42.81c-.54-.63-1.05-1.27-1.53-1.9A9.13,9.13,0,0,0,24,19.85Z"
              transform="translate(0 0)"
            />
          </g>
          <g className="outline">
            <path
              d="M3.13,23A14.78,14.78,0,0,1,3.13,9l-1-1a16,16,0,0,0,0,16Z"
              transform="translate(0 0)"
            />
            <path
              d="M23,28.87A14.78,14.78,0,0,1,9,28.87l-1,1a16,16,0,0,0,16,0Z"
              transform="translate(0 0)"
            />
            <path
              d="M28.87,9a14.78,14.78,0,0,1,0,14.08l1,1a16,16,0,0,0,0-16Z"
              transform="translate(0 0)"
            />
            <path
              d="M9,3.13A14.78,14.78,0,0,1,23,3.13l1-1a16,16,0,0,0-16,0Z"
              transform="translate(0 0)"
            />
          </g>
        </svg>
        <h4>Light Mode</h4>
      </div>
    )

    return (
      <div className="theme-toggle">
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={event => toggleTheme(event.target.checked ? `dark` : `light`)}
                checked={theme === `dark`}
              />{" "}
              <div>{theme === `dark` ? moon : sun}</div>
            </label>
          )}
        </ThemeToggler>
      </div>
    )
  }
}

export default DarkMode
