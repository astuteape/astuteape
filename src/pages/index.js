import React from "react"

import Layout from "../components/layout/index_layout"
import SEO from "../components/meta_data/seo"
import PageTitle from "../components/text/page_title"
import HeroText from "../components/text/hero_text"
import SocialNav from "../components/nav/social_nav"
import Image from "../components/image/image"

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
    <div className="index-page-title">
      <PageTitle titleText="Wade Christensen" />
    </div>
    <div className="index-page-image">
      <Image />
    </div>
    <div className="index-text-body">
      <HeroText />
    </div>
    <div className="index-social-nav">
      <SocialNav />
    </div>
  </Layout>
)

export default IndexPage
