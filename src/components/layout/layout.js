import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"

// Site components
import DarkMode from "../theme/dark_mode"
import PageTitle from "../text/page_title"
import PrimaryNav from "../nav/primary_nav"
import SocialNav from "../nav/social_nav"

const Layout = ({ title, children }) => (
  <div className="layout-site-container">
    <main className="layout-content-container">
      <section className="layout-content-header">
        <PageTitle titleText={title} />
        <DarkMode />
      </section>
      {/* Site Content */}
      <section className="layout-content-main">{children}</section>
      <section className="layout-content-footer">
        <SocialNav />
      </section>
    </main>
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
