import React from "react"

// From Gatsby
import SEO from "../components/meta_data/seo"

// Site components
import HeroText from "../components/text/hero_text"
import Image from "../components/image/image"
import Layout from "../components/layout/layout"
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
    <div className="index main-header">
      <div>
        <PageTitle titleText="Wade Christensen" />
        <h3 className="page-title-aside">Is Astute Ape</h3>
      </div>
    </div>
    <div className="index main-content">
      <div className="index-image">
        <Image />
      </div>
      <div className="index-text-body">
        <HeroText />
      </div>
    </div>
    <div className="index main-footer">
      <div className="contact">
        <SocialNav />
      </div>
    </div>
  </Layout>
)

export default IndexPage
