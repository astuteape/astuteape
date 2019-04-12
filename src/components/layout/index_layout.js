import React from "react"
import PropTypes from "prop-types"
import Image from "../image/image"
import PrimaryNav from "../nav/primary_nav"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import "../../styles/layout.css"

const Layout = ({ children }) => (
  <div className="layout-site-container-index">
    <main className="layout-main-content-index">{children}</main>
    <TransitionPortal>
      <PrimaryNav />
    </TransitionPortal>
    <section className="index-page-image">
      <Image />
    </section>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
