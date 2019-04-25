# The Astute Ape Website

The personal and business website of Wade Christensen. This repository is public as both an example of my work and a reference for others. All content including but not limited to blog posts, projects, icons, images, and art of any kind are owned and copyrighted by Wade Christensen.

This site is developed using [Gatsby](https://www.gatsbyjs.org/). All Gatsby and Gatsby plugin code is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Blog Posts

Each blog post lives in a folder matching a hyphen separated version of the post title.

- Each folder contains:

  - An index.md file containing the post text
  - Any images that appear in the post

- Each post defines a set of "frontmatter" at the top of the index.md file. Frontmatter is defined between two sets of three hyphens. Each item is a key value pair separated by a colon.

- Blog post frontmatter includes:
  - title
  - author
  - date (publish date)
  - summary (280 characters or less)
  - keywords (keywords for SEO)

```
---
title: "A Blog Post"
author: "John Doe"
date: "2019-01-22"
summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales magna in nisi tempus sollicitudin ac vitae felis. Donec at convallis ex, eget hendrerit tellus."
keywords: "Blog SEO Adwords Blah Ugh"
---
```

- Code syntax highlighting in posts is done using [Prism](https://prismjs.com/) as implemented by the [Gatsby Remark Prism Plugin](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)
- Blog posts are written in Chicago Style and include footnotes, which are cited in Chicago Style.

## Projects

Projects are portfolio items or other things I'm working on that I wish to showcase. As with blog posts, each project lives in a folder matching a hyphen separated version of the project title.

- Each folder contains:

  - An index.md file containing the project text
  - Any images that appear in the project

- Each project defines a set of "frontmatter" at the top of the index.md file. Frontmatter is defined between two sets of three hyphens. Each item is a key value pair separated by a colon.

- Project frontmatter includes:
  - title
  - summary (280 characters or less)

```
---
title: "A Portfolio Project"
summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales magna in nisi tempus sollicitudin ac vitae felis. Donec at convallis ex, eget hendrerit tellus."
---
```
