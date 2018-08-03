import React from "react"
import { connect } from "react-redux"

// components
import Heading from "../components/Heading"
// containers
import Card from "./Card"
import Footer from "./Footer"

const Page06 = props => {

  const { heading } = props.page06

  return (
    <div className="Page06 page">

      <Heading main={heading.main} sub={heading.sub} />

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  routes: state.routes,
  page06: state.routes.page06,
})

export default connect(mapStateToProps)(Page06)
