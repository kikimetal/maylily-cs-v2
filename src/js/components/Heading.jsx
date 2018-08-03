import React from "react"

const Heading = props => (
  <h1 className="Heading">
    <span className="main">{props.main}</span>
    <span className="sub">{props.sub}</span>
  </h1>
)
Heading.defaultProps = {
  main: "HEADING...",
  sub: "見出しを挿入",
}

export default Heading
