import React from "react"

// From Gatsby
import SEO from "../components/meta_data/seo"

// Site components
import Layout from "../components/layout/layout"

const FormSuccessPage = () => (
  <Layout title="Success">
    <SEO title="Success" keywords={[`astute ape`, `wade christensen`]} />
    {/* Apply content layout rules to outermost div *-container */}
    <div className="single-container">
      <div className="single-content">
        <h1>Thank You,</h1>
        <p>
          I have received your form submission, and I will get back to you as
          soon as possible. I typically respond to genuine messages within two
          business days.
        </p>
      </div>
    </div>
  </Layout>
)

export default FormSuccessPage
