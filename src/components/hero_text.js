import React from "react"
import { Link } from "gatsby"
import "../styles/modules.css"

const HeroText = () => {
  return (
    <p className="hero-text">
      I'm a <span className="span-lvl-one">software developer</span>,
      <br />
      <span className="span-lvl-one indent-lvl-one">multimedia producer</span>,
      and <span className="span-lvl-one">educator</span>
      <br />
      <span className="indent-lvl-two">navigating</span> the technology and
      media industries. I like talking to folks, so{" "}
      <span className="span-lvl-two">
        <Link to="../contact">get in touch</Link>
      </span>
      .
    </p>
  )
}

export default HeroText
