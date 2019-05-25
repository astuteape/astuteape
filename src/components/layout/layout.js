import React from "react"
import PropTypes from "prop-types"
import PrimaryNav from "../nav/primary_nav"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import "../../styles/layout.css"
// import DarkMode from "../theme/dark_mode"

const Layout = ({ children }) => (
  <div className="layout-site-container">
    {/* Site Content */}
    {/* <DarkMode /> */}
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
