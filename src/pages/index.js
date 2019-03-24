import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/seo"
import PageTitle from "../components/text/page_title"
import HeroText from "../components/hero_text"
import SocialNav from "../components/nav/social_nav"

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
    <PageTitle titleText="Wade Christensen" />
    <HeroText />
    <SocialNav />
  </Layout>
)

export default IndexPage
