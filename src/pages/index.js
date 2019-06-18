import React from "react"

// From Gatsby
import SEO from "../components/meta_data/seo"

// Site components
import ApeIllustration from "../components/image/ape"
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
    <div className="single-container">
      <ApeIllustration />
    </div>
  </Layout>
)

export default IndexPage
