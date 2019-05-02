import React from "react"

const SocialNav = () => (
  <div className="social-nav">
    <h4>Get in touch, or follow me on social</h4>
    <ul>
      <li>
        <a
          href="mailto:wade@astuteape.com?subject=Mail from Astute Ape Website"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>email</title>
            <g className="icon">
              <path
                d="M26.11,23.82c0,.05-.1.2-.23.2H6.12c-.13,0-.2-.15-.23-.2A.56.56,0,0,1,6,23.24l7.14-7.18,2.37,2.22a.72.72,0,0,0,1,0l2.37-2.22L26,23.24A.56.56,0,0,1,26.11,23.82Z"
                transform="translate(0 0)"
              />
              <path
                d="M26.41,9V22.89s0,0,0,0l-7.12-7.15,7.11-6.65Z"
                transform="translate(0 0)"
              />
              <path
                d="M12.73,15.71,5.61,22.86l0,0V9l0,0Z"
                transform="translate(0 0)"
              />
              <path
                d="M26,8.68,18.9,15.34l-.18.17-.2.19-2.36,2.21a.24.24,0,0,1-.32,0L13.48,15.7l-.2-.19-.18-.17L6,8.68a.49.49,0,0,1-.09-.5S6,8,6.12,8H25.88c.15,0,.21.15.24.2A.49.49,0,0,1,26,8.68Z"
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
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/astuteape"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>twitter</title>
            <g className="icon">
              <path
                d="M27,9.16a9,9,0,0,1-2.59.7,4.48,4.48,0,0,0,2-2.49,9.53,9.53,0,0,1-2.88,1.09,4.51,4.51,0,0,0-7.81,3.09,7.32,7.32,0,0,0,.1,1A12.74,12.74,0,0,1,6.52,7.87a4.31,4.31,0,0,0-.6,2.28,4.69,4.69,0,0,0,2,3.79,4.62,4.62,0,0,1-2-.55v0a4.5,4.5,0,0,0,3.64,4.43,4.93,4.93,0,0,1-1.2.15,4.3,4.3,0,0,1-.84-.1,4.55,4.55,0,0,0,4.23,3.13A9.22,9.22,0,0,1,6.07,23a8,8,0,0,1-1.09,0,12.85,12.85,0,0,0,19.8-10.85V11.5A11.32,11.32,0,0,0,27,9.16Z"
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
        </a>
      </li>
      <li>
        <a
          href="https://github.com/astuteape"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>github</title>
            <g className="icon">
              <path
                d="M19.47,20.66a3.6,3.6,0,0,1,1,2.79c0,2,0,3.65,0,4.14a.73.73,0,0,0,.44.69,15,15,0,0,1-8.34,0,.73.73,0,0,0,.43-.69c0-.36,0-1.54,0-2.81C8.78,25.7,7.89,23,7.89,23a4.06,4.06,0,0,0-1.67-2.21c-1.37-.93.1-.91.1-.91a3.19,3.19,0,0,1,2.32,1.55A3.2,3.2,0,0,0,13,22.69a3.25,3.25,0,0,1,1-2c-3.35-.38-6.87-1.68-6.87-7.45A5.89,5.89,0,0,1,8.66,9.16a5.4,5.4,0,0,1,.15-4S10.08,4.76,13,6.71a14.54,14.54,0,0,1,7.56,0c2.88-1.95,4.14-1.54,4.14-1.54a5.4,5.4,0,0,1,.15,4,5.85,5.85,0,0,1,1.56,4.06C26.37,19,22.83,20.28,19.47,20.66Z"
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
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/wadetchristensen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>linkedin</title>
            <g className="icon">
              <path
                d="M13.08,12.35h4v2.07h.06a4.48,4.48,0,0,1,4-2.07c4.26,0,5,2.65,5,6.11v7H22V19.26c0-1.49,0-3.4-2.19-3.4s-2.53,1.62-2.53,3.29v6.34H13.08Z"
                transform="translate(0 0)"
              />
              <path
                d="M5.78,12.35h4.38V25.49H5.78Z"
                transform="translate(0 0)"
              />
              <path
                d="M10.16,8.7A2.19,2.19,0,1,1,8,6.51,2.19,2.19,0,0,1,10.16,8.7Z"
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
        </a>
      </li>
    </ul>
  </div>
)

export default SocialNav
