import React from "react"

// From Gatsby
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/meta_data/seo"

// Site components
import Layout from "../components/layout/layout"
import HeroText from "../components/text/hero_text"

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
            say. I'm certainly not brilliant, but I can be a clever ape most
            days. I even use tools. Whether those tools include an IDE, the
            "Chicago Manual of Style," or a brush pen, depends on the project.
          </p>
          <p>
            If you want to collaborate on something technical, something
            educational, or something beautiful, let me know. I'm always happy
            to hear new ideas. In addition to my social channels, you can reach
            out directly with the{" "}
            <AniLink fade to={"/contact"}>
              Contact
            </AniLink>{" "}
            form.
          </p>
        </div>
        <hr />
        <HeroText />
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
