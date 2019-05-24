import React from "react"

// From Gatsby
import SEO from "../components/meta_data/seo"

// Site components
import DarkMode from "../components/theme/dark_mode"
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
    <div className="index-container">
      <div>
        <PageTitle titleText="Contact" />
        <DarkMode />
      </div>
      <div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/form-success"
        >
          <p class="hidden">
            <label>
              All humans ignore this field: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>Full Name:</label>
            <br />
            <input type="text" name="name" placeholder="Nim Chimpsky" />
          </p>
          <p>
            <label>Email:</label>
            <br />
            <input type="email" name="email" placeholder="nim@astuteape.com" />
          </p>
          <p>
            <label>Message:</label>
            <br />
            <textarea name="message" />
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
      <SocialNav />
    </div>
  </Layout>
)

export default ContactPage
