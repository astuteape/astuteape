import React from "react"
import PropTypes from "prop-types"
import { TransitionPortal } from "gatsby-plugin-transition-link"

// Site components
import DarkMode from "../theme/dark_mode"
import PageTitle from "../text/page_title"
import PrimaryNav from "../nav/primary_nav"
import SocialNav from "../nav/social_nav"

const Layout = ({ title, children }) => (
  <main>
    <section className="l-wrapper">
      <div className="l-header">
        <PageTitle titleText={title} />
        <DarkMode />
      </div>
      <div className="l-content">{children}</div>
      <div className="l-footer">
        <SocialNav />
      </div>
    </section>
    <nav class="nav">
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
