import React from "react"

import Layout from "../components/layout"
import HeroText from "../components/hero_text"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `astute ape`,
        `wade christensen`,
        `software`,
        `developer`,
        `programming`,
        `code`,
        `designer`,
        `photography`,
        `video`,
        `art`,
      ]}
    />
    <h1>Wade Christensen</h1>
    <HeroText />
  </Layout>
)

export default IndexPage
