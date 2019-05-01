import React from "react"

const ExternalArticle = props => (
  <li>
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <h3>{props.title}</h3>
      <p>{props.date}</p>
      <p>{props.publication}</p>
    </a>
  </li>
)

export default ExternalArticle
