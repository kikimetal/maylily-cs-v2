import React from "react"

const Heading = props => (
  <h1 className="Heading">
    <span className="en">{props.en}</span>
    <span className="ja">{props.ja}</span>
  </h1>
)
Heading.defaultProps = {
  en: "HEADING...",
  ja: "見出しを挿入",
}

export default Heading
