import React from "react"
import PropTypes from "prop-types"
import PrimaryNav from "../nav/primary_nav"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import "../../styles/layout.css"

const Layout = ({ children }) => (
  <div className="layout-site-container">
    {/* Site Content */}
    <main className="layout-main-container">{children}</main>

    {/* Site Navigation */}
    <TransitionPortal>
      <PrimaryNav />
    </TransitionPortal>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
