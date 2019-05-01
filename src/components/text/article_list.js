import React from "react"
import ExternalArticle from "./external_article"

const ArticleList = () => (
  <section className="article-list">
    <ul>
      <ExternalArticle
        link="https://blog.teamtreehouse.com/install-sass-windows-chocolatey"
        title="How to Install Sass on Windows with Chocolatey"
        date="August 21, 2018"
        publication="Treehouse Blog"
      />
      <ExternalArticle
        link="https://blog.teamtreehouse.com/install-sass-macos-homebrew"
        title="How to Install Sass on MacOS with Homebrew"
        date="August 07, 2018"
        publication="Treehouse Blog"
      />
      <ExternalArticle
        link="https://blog.teamtreehouse.com/how-to-learn-javascript"
        title="How to Learn JavaScript: Five Tips for New Learners"
        date="July 24, 2018"
        publication="Treehouse Blog"
      />
      <ExternalArticle
        link="https://blog.teamtreehouse.com/an-introduction-to-blender"
        title="An Intro to Blender"
        date="September 28, 2015"
        publication="Treehouse Blog"
      />
      <ExternalArticle
        link="https://blog.teamtreehouse.com/mean-self-taught"
        title="What Does it Mean to be Self-taught?"
        date="August 13, 2015"
        publication="Treehouse Blog"
      />
      <ExternalArticle
        link="https://blog.teamtreehouse.com/really-learn-college"
        title="What You Really Learn in College"
        date="July 13, 2015"
        publication="Treehouse Blog"
      />
      <ExternalArticle
        link="https://blog.teamtreehouse.com/choose-programming-language"
        title="How to Choose a Programming Language"
        date="July 01, 2015"
        publication="Treehouse Blog"
      />
      <ExternalArticle
        link="https://blog.teamtreehouse.com/learn-javascript-photoshop-game"
        title="Learn JavaScript and Up Your Photoshop Game"
        date="June 10, 2015"
        publication="Treehouse Blog"
      />
      <ExternalArticle
        link="https://blog.teamtreehouse.com/introduction-neat-semantic-sass-grid"
        title="Intro to Neat — A Semantic Sass Grid"
        date="May 06, 2015"
        publication="Treehouse Blog"
      />
    </ul>
  </section>
)

export default ArticleList
