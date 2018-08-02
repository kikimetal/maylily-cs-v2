import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import urljoin from "url-join"

// components
import Btn from "../components/Btn"
import Heading from "../components/Heading"
import LazyLoadImg from "../components/LazyLoadImg"

// containers
import Footer from "./Footer"

const Page01 = props => {

  let fulfilled

  if (props.story.status === "fulfilled") {
    fulfilled = (
      <div className="story-content">
        {props.story.data.map((row, i) => {
          if (row.element === "h1") {
            return (<h1 key={"story-data-row-" + i}>{row.value}</h1>)
          }
          else if (row.element === "h2") {
            return (<h2 key={"story-data-row-" + i}>{row.value}</h2>)
          }
          else if (row.element === "p") {
            return (<p key={"story-data-row-" + i}>{row.value}</p>)
          }
          else if (row.element === "img") {
            return (
              <LazyLoadImg
                key={"story-data-row-" + i}
                imgsrc={row.value}
                height="50vh"
                />
            )
          }
        })}
      </div>
    )
  }

  const pending = (
    <div className="story-content">
      <h2>最新の情報を読み込んでいます。</h2>
    </div>
  )

  const rejected = (
    <div className="story-content">
      <h2 className="error">情報の読み込みに失敗しました。</h2>
    </div>
  )

  return (
    <div className="Page01 page Story">
      <Heading en={props.page01.heading.en} ja={props.page01.heading.ja} />
      {
        props.story.status === "fulfilled"
          ? fulfilled
          : props.story.status === "pending"
            ? pending
            : rejected
      }
      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  // routes: state.routes,
  page01: state.routes.page01,
  story: state.story,
})

export default connect(mapStateToProps)(Page01)
