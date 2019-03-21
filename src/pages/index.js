import React from "react"

import Layout from "../components/layout"
import HeroText from "../components/HeroText"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Wade Christensen</h1>
    <HeroText />
  </Layout>
)

export default IndexPage
