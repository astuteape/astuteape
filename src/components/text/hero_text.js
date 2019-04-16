import React from "react"
import "../../styles/modules.css"

const HeroText = () => {
  return (
    <div className="hero-text">
      <p>
        I'm a <span className="hero-emphasis">software developer</span>,
        <span className="hero-emphasis"> multimedia producer</span>, and
        <span className="hero-emphasis"> educator</span> available for web
        development, and print or digital design. Currently, I bring coding
        lessons to life{" "}
        <a
          href="https://teamtreehouse.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Treehouse.
        </a>
      </p>
    </div>
  )
}

export default HeroText
