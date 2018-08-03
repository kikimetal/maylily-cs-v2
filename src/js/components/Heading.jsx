import React from "react"

const Heading = props => (
  <h1 className="Heading">
    <span className="Heading-main">{props.main}</span>
    <span className="Heading-sub">{props.sub}</span>
  </h1>
)
Heading.defaultProps = {
  main: "HEADING...",
  sub: "見出しを挿入",
}

export default Heading
