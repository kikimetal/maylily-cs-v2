import React from "react"
import { connect } from "react-redux"

// components
import Heading from "../components/Heading"
// containers
import Card from "./Card"
import Footer from "./Footer"

const Page02_01 = props => {

  const { heading } = props.page02_01

  return (
    <div className="Page02_01 page">

      <Heading main={heading.main} sub={heading.sub} />

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  routes: state.routes,
  page02_01: state.routes.page02_01,
})

export default connect(mapStateToProps)(Page02_01)
