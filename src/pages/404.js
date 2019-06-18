import React from "react"
import SEO from "../components/meta_data/seo"
import { Link } from "gatsby"

// Site components
import ApeIllustration from "../components/image/ape"
import Layout from "../components/layout/layout"

const NotFoundPage = () => (
  <Layout title="404">
    <SEO title="404: Not found" />
    <div className="single-container">
      <ApeIllustration />
      <h2>
        Oops! It looks like we're in uncharted lands. Let's go{" "}
        <Link to="/">home</Link>.
      </h2>
    </div>
  </Layout>
)

export default NotFoundPage
