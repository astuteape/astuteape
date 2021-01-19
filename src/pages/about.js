import React from "react"

// From Gatsby
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/meta_data/seo"

// Site components
import Layout from "../components/layout/layout"

const AboutPage = ({ data }) => (
  <Layout title="About">
    <SEO
      title="About"
      keywords={[
        `astute ape`,
        `wade christensen`,
        `software`,
        `developer`,
        `programming`,
        `code`,
        `designer`,
        `photography`,
        `video`,
        `art`,
      ]}
    />
    <div>
      <section>
        <h1 className="about-header">Wade Christensen</h1>
        <Img
          fixed={data.file.childImageSharp.fixed}
          className="text-wrap-image"
        />
        <div>
          <p>
            Why Astute Ape? Simple, "wadechristensen.com" was taken. I'm also a
            sucker for aliteration.
          </p>
          <p>
            At best, we humans are just clever primates. Astute apes, you might
            say.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "wade.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 350) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AboutPage
