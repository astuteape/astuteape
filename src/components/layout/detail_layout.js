import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"

// Site components
import "../../styles/layout.css"
import PrimaryNav from "../nav/primary_nav"
import SocialNav from "../nav/social_nav"

const Layout = ({ children }) => (
  <div className="layout-site-container">
    {/* Site Content */}
    <main className="layout-main-container">{children}</main>
    <section className="layout-page-footer">
      <SocialNav />
    </section>
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
