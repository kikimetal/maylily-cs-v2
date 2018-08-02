import React from "react"

export default class ScrollToTopOnMount extends React.Component {
  componentDidUpdate(prevProps) {
    window.scrollTo(0, 1)
  }
  render() {
    return null
  }
}
