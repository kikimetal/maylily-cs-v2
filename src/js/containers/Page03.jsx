import React from "react"
import { connect } from "react-redux"

// components
import Heading from "../components/Heading"
// containers
import Card from "./Card"
import Footer from "./Footer"

const Page03 = props => {

  const { heading } = props.page03

  return (
    <div className="Page03 page">

      <Heading main={heading.main} sub={heading.sub} />

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  routes: state.routes,
  page03: state.routes.page03,
})

export default connect(mapStateToProps)(Page03)
