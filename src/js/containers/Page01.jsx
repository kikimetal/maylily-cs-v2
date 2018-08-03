import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import urljoin from "url-join"

// components
import Btn from "../components/Btn"
import Heading from "../components/Heading"
import LazyLoadImg from "../components/LazyLoadImg"

// containers
import NewsCardList from "./NewsCardList"
import Footer from "./Footer"

const Page01 = props => {
  return(
    <div className="Page01 page">
      <Heading main="News Release" sub="ニュースリリース" />
      <NewsCardList />

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  page01: state.routes.page01,
  story: state.story,
})

export default connect(mapStateToProps)(Page01)
