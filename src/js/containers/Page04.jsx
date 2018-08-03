import React from "react"
import { connect } from "react-redux"

// components
import Heading from "../components/Heading"
// containers
import Card from "./Card"
import Footer from "./Footer"

const Page04 = props => {

  const { heading } = props.page04

  return (
    <div className="Page04 page">

      <Heading main={heading.main} sub={heading.sub} />

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  routes: state.routes,
  page04: state.routes.page04,
})

export default connect(mapStateToProps)(Page04)
