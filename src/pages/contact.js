import React from "react"

// From Gatsby
import SEO from "../components/meta_data/seo"

// Site components
import ContactForm from "../components/forms/contact"
import Layout from "../components/layout/layout"

const ContactPage = () => (
  <Layout title="Contact">
    <SEO
      title="Contact"
      keywords={[`astute ape`, `wade christensen`, `contact`, `hire`]}
    />
    {/* Apply content layout rules to outermost div *-container */}
    <div className="single-container">
      <div className="single-content">
        <ContactForm />
      </div>
    </div>
  </Layout>
)

export default ContactPage
