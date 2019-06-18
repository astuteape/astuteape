import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"

// Site components
import PrimaryNav from "../nav/primary_nav"
import SocialNav from "../nav/social_nav"

const Layout = ({ children }) => (
  <div className="layout-site-container">
    {/* Site Content */}
    <main className="layout-content-container detail">
      <section>{children}</section>
    </main>
    <section className="layout-content-footer detail">
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
