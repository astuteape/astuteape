import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"

// Site components
import PrimaryNav from "../nav/primary_nav"
import SocialNav from "../nav/social_nav"

const Layout = ({ children }) => (
  <main>
    <section className="l-detail-wrapper">
      <div className="l-detail-content">{children}</div>
      <div className="l-detail-footer">
        <SocialNav />
      </div>
    </section>
    <nav className="nav">
      <TransitionPortal>
        <PrimaryNav />
      </TransitionPortal>
    </nav>
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
