import React from "react"
import "../../styles/modules.css"

const HeroText = () => {
  return (
    <div className="hero-text">
      <p>
        I'm a <span className="span-lvl-one">software developer</span>,
        <span className="span-lvl-one indent-lvl-one">
          {" "}
          multimedia producer
        </span>
        , and<span className="span-lvl-one"> educator</span>
        <span className="indent-lvl-two"> navigating</span> the technology and
        media industries.
      </p>
    </div>
  )
}

export default HeroText
