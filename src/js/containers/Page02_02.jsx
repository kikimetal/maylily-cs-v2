import React from "react"
import { connect } from "react-redux"

// components
import Heading from "../components/Heading"
// containers
import Card from "./Card"
import Footer from "./Footer"

const Page02_02 = props => {

  const { heading } = props.page02_02

  return (
    <div className="Page02_02 page">

      <Heading main={heading.main} sub={heading.sub} />

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  routes: state.routes,
  page02_02: state.routes.page02_02,
})

export default connect(mapStateToProps)(Page02_02)
