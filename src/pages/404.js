import React from "react"
import SEO from "../components/meta_data/seo"
import PageTitle from "../components/text/page_title"
import { Link } from "gatsby"

// Site components
import ApeIllustration from "../components/image/ape"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <div className="index-container">
      <PageTitle titleText="404" />
      <ApeIllustration />
      <div className="index-text-body">
        <h2>
          Oops! It looks like we're in uncharted lands. Let's go{" "}
          <Link to="/">home</Link>.
        </h2>
      </div>
    </div>
  </div>
)

export default NotFoundPage
