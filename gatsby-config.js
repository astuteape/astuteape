module.exports = {
  siteMetadata: {
    title: `Astute Ape`,
    description: `The Website of Wade Christensen: Software Developer, Multimedia Producer, and Educator.`,
    author: `wade@astuteape.com`,
    siteUrl: "https://astuteape.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `writing`,
        path: `${__dirname}/content/writing`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      // RSS Feed
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.summary,
                  date: edge.node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/writing${
                    edge.node.fields.slug
                  }`,
                  guid: `${site.siteMetadata.siteUrl}/writing${
                    edge.node.fields.slug
                  }`,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
            {
              allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/content/writing/" } }
                sort: { order: DESC, fields: [frontmatter___date]},
              ) {
                edges {
                  node {
                    html
                    fields {slug}
                    frontmatter {
                      title
                      date
                      summary
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "Astute Ape RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-dark-mode`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `astute-ape-website`,
        short_name: `astute-ape`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/astute_ape.png`,
      },
    },
  ],
}
