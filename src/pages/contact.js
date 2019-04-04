import React from "react"

import Layout from "../components/layout/static_layout"
import SEO from "../components/meta_data/seo"
import PageTitle from "../components/text/page_title"
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
    <div className="index-page-title">
      <PageTitle titleText="Contact" />
    </div>
    <div className="index-social-nav">
      <SocialNav />
    </div>
  </Layout>
)

export default IndexPage
