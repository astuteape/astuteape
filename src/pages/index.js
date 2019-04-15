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
    <div className="header">
      <PageTitle titleText="Wade Christensen" />
      <h3 className="page-title-aside">Astute Ape</h3>
    </div>
    <div className="content">
      <div className="index-image">
        <Image />
      </div>
      <div className="index-text-body">
        <HeroText />
      </div>
    </div>
    <div className="footer">
      <div className="contact">
        <h3>Get in touch via email or social.</h3>
        <SocialNav />
      </div>
    </div>
  </Layout>
)

export default IndexPage
