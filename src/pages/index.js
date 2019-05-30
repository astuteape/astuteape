import React from "react"

// From Gatsby
import SEO from "../components/meta_data/seo"

// Site components
import ApeIllustration from "../components/image/ape"
import HeroText from "../components/text/hero_text"
import Layout from "../components/layout/layout"

const IndexPage = () => (
  <Layout title="Astute Ape">
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
    <div className="single-container">
      <div className="single-content">
        <ApeIllustration />
        <HeroText />
      </div>
    </div>
  </Layout>
)

export default IndexPage
