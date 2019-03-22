import React from "react"
import SEO from "../components/seo"
import PageTitle from "../components/text/page_title"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <main>
    <SEO title="404: Not found" />
    <PageTitle titleText="404" />
    <p>
      Oops! This is a404br oken page. It's getting daaaark in here . . . .
      Please take me <Link to="/">home</Link>.
    </p>
  </main>
)

export default NotFoundPage
