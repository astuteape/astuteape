/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import PrimaryNav from "../nav/primary_nav"
import Footer from "../footer/footer"

import "../../styles/layout.css"

const Layout = ({ children }) => (
  <div className="grid-container-frame">
    <section className="grid-nav">
      <PrimaryNav />
    </section>
    <section className="grid-main">
      <main className="phi-item">{children[1]}</main>
      <div className="grid-item">{children[2]}</div>
      <div className="grid-item">3</div>
      <div className="grid-item">4</div>
      <div className="grid-item">5</div>
      <div className="grid-item">6</div>
      <div className="grid-item">7</div>
      <div className="grid-item">8</div>
      <div className="grid-item">9</div>
    </section>
    <section className="grid-footer">
      <Footer />
    </section>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
