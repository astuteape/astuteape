import React from "react"
import PropTypes from "prop-types"
import PrimaryNav from "../nav/primary_nav"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import "../../styles/layout.css"

const Layout = ({ children }) => (
  <div className="layout-site-container">
    <main className="layout-main-container-detail">{children}</main>
    <TransitionPortal>
      <PrimaryNav />
    </TransitionPortal>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
