import React from "react"

import DarkMode from "../theme/dark_mode"

const PageTitle = props => (
  <div>
    <h1 className="page-title">{props.titleText}</h1>
    <DarkMode />
  </div>
)

export default PageTitle
