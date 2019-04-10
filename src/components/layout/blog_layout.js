import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import PrimaryNav from "../nav/primary_nav"

import "../../styles/layout.css"

const Layout = ({ children }) => (
  <div className="layout-site-container">
    <main className="layout-blog-main-content">{children}</main>
    <TransitionPortal className="layout-site-nav">
      <PrimaryNav />
    </TransitionPortal>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
