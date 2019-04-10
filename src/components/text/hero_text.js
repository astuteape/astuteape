import React from "react"
import { Link } from "gatsby"
import "../../styles/modules.css"

const HeroText = () => {
  return (
    <div className="hero-text">
      <p>
        I'm a <span className="span-lvl-one">software developer</span>,
      </p>
      <p>
        <span className="span-lvl-one indent-lvl-one">multimedia producer</span>
        , and<span className="span-lvl-one"> educator</span>
      </p>
      <p>
        <span className="indent-lvl-two">navigating</span> the technology and
        media industries. Want to chat?{" "}
        <span className="span-lvl-two">
          <Link to="/contact">get in touch.</Link>
        </span>
      </p>
    </div>
  )
}

export default HeroText
