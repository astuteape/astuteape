import React from "react"

// From Gatsby
import SEO from "../components/meta_data/seo"

// Site components
import Layout from "../components/layout/layout"
import SocialNav from "../components/nav/social_nav"

const FormSuccessPage = () => (
  <Layout>
    <SEO title="Success" keywords={[`astute ape`, `wade christensen`]} />
    {/* Apply content layout rules to outermost div *-container */}
    <div className="index-container">
      <div className="index-text-body">
        <h1>Thank You,</h1>
        <p>
          I have received your form submission, and I will get back to you as
          soon as possible. I typically respond to genuine messages within two
          business days.
        </p>
      </div>
      <SocialNav />
    </div>
  </Layout>
)

export default FormSuccessPage
