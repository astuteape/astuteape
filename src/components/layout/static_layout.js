import React from "react"
import PropTypes from "prop-types"

import PrimaryNav from "../nav/primary_nav"

import "../../styles/layout.css"

const Layout = ({ children }) => (
  <div className="layout-site-container">
    <main className="layout-main-content">{children}</main>
    <section className="layout-site-nav">
      <PrimaryNav />
    </section>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
