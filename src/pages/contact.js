import React from "react"

// From Gatsby
import SEO from "../components/meta_data/seo"

// Site components
import ContactForm from "../components/forms/contact"
import Layout from "../components/layout/layout"
import PageTitle from "../components/text/page_title"
import SocialNav from "../components/nav/social_nav"

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      keywords={[`astute ape`, `wade christensen`, `contact`, `hire`]}
    />
    {/* Apply content layout rules to outermost div *-container */}
    <div className="single-container">
      <div className="single-header">
        <PageTitle titleText="Contact" />
      </div>
      <div className="single-content">
        <ContactForm />
      </div>
      <SocialNav />
    </div>
  </Layout>
)

export default ContactPage
