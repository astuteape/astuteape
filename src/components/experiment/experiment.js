import React from "react"

const Experiment = props => (
  <div className="experiment">
    <p>{props.embed}</p>
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <h3 className="collection-item-title">{props.title}</h3>
      <button>View on CodePen</button>
    </a>
  </div>
)

export default Experiment
