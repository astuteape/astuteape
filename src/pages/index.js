import React from "react"

// From Gatsby
import SEO from "../components/meta_data/seo"

// Site components
import ApeIllustration from "../components/image/ape"
import HeroText from "../components/text/hero_text"
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
        <PageTitle titleText="Astute Ape" />
      </div>
      <ApeIllustration />
      <div className="index-text-body">
        <HeroText />
      </div>
      <SocialNav />
    </div>
  </Layout>
)

export default IndexPage
