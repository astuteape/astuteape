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
    <main className="grid-main">
      <div className="grid-item-first">{children[1]}</div>
      <div className="grid-item-second">{children[2]}</div>
      <div className="grid-item-third">{children[3]}</div>
    </main>
    <section className="grid-footer">
      <Footer />
    </section>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
