import React from "react"

// From Gatsby
import SEO from "../components/meta_data/seo"

// Site components
import DarkMode from "../components/theme/dark_mode"
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
    {/* Apply content layout rules to outermost div *-container */}
    <div className="index-container">
      <div>
        <PageTitle titleText="Wade Christensen" />
        <h3 className="page-title-aside">Is Astute Ape</h3>
        <DarkMode />
      </div>
      <div className="index-image">
        <Image />
      </div>
      <div className="index-text-body">
        <HeroText />
      </div>
      <SocialNav />
    </div>
  </Layout>
)

export default IndexPage
