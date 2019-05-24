import React from "react"

// From Gatsby
import SEO from "../components/meta_data/seo"

// Site components
import DarkMode from "../components/theme/dark_mode"
import Layout from "../components/layout/layout"
import SocialNav from "../components/nav/social_nav"

const FormSuccessPage = () => (
  <Layout>
    <SEO title="Success" keywords={[`astute ape`, `wade christensen`]} />
    {/* Apply content layout rules to outermost div *-container */}
    <div className="index-container">
      <div>
        <DarkMode />
      </div>
      <div>
        <p>
          Your form submission was submitted. I will get back to you as soon as
          possible.
        </p>
      </div>
      <SocialNav />
    </div>
  </Layout>
)

export default FormSuccessPage
