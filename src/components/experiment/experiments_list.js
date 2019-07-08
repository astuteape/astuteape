import React from "react"
import Experiment from "./experiment"

const ExperimentsList = () => (
  <ul>
    <li>
      <Experiment
        title="Analog Clock with Text Labels"
        link=""
        embed={
          <iframe
            height="350"
            style={{ width: `100%` }}
            scrolling="no"
            title="Analog Clock with Text Labels"
            src="//codepen.io/astuteape/embed/QXQZmM/?height=350&theme-id=0&default-tab=result"
            frameborder="no"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen{" "}
            <a href="https://codepen.io/astuteape/pen/QXQZmM/">
              Analog Clock with Text Labels
            </a>{" "}
            by Wade Christensen (
            <a href="https://codepen.io/astuteape">@astuteape</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        }
      />
    </li>
    <li>
      <Experiment
        title="Loading Animation Experiment"
        link="https://codepen.io/astuteape/pen/BevBOj/"
        embed={
          <iframe
            height="350"
            style={{ width: `100%` }}
            scrolling="no"
            title="Loading Animation Experiment"
            src="//codepen.io/astuteape/embed/BevBOj/?height=350&theme-id=0&default-tab=result"
            frameborder="no"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen{" "}
            <a href="https://codepen.io/astuteape/pen/BevBOj/">
              Loading Animation Experiment
            </a>{" "}
            by Wade Christensen (
            <a href="https://codepen.io/astuteape">@astuteape</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        }
      />
    </li>
    <li>
      <Experiment
        title="Theme An Ape"
        link="https://codepen.io/astuteape/pen/YbByNK/"
        embed={
          <iframe
            height="350"
            style={{ width: `100%` }}
            scrolling="no"
            title="Theme An Ape"
            src="//codepen.io/astuteape/embed/YbByNK/?height=350&theme-id=0&default-tab=result"
            frameborder="no"
            allowtransparency="true"
            allowfullscreen="true"
          >
            See the Pen{" "}
            <a href="https://codepen.io/astuteape/pen/YbByNK/">Theme An Ape</a>{" "}
            by Wade Christensen (
            <a href="https://codepen.io/astuteape">@astuteape</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
        }
      />
    </li>
  </ul>
)

export default ExperimentsList
