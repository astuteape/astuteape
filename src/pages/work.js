import React from "react"
import Layout from "../components/layouts/dynamic_layout"
import SEO from "../components/meta_data/seo"
import PageTitle from "../components/text/page_title"

const WorkPage = () => {
  return (
    <Layout>
      <SEO
        title="projects"
        keywords={[
          "astute ape",
          "wade christensen",
          "projects",
          "portfolio",
          "work",
        ]}
      />
      <PageTitle titleText="Work" />
    </Layout>
  )
}

export default WorkPage
