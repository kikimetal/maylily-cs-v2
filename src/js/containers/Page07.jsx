import React from "react"
import { connect } from "react-redux"

// components
import Heading from "../components/Heading"
// containers
import Card from "./Card"
import Footer from "./Footer"

const Page07 = props => {

  const { heading } = props.page07

  return (
    <div className="Page07 page">

      <Heading main={heading.main} sub={heading.sub} />

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  routes: state.routes,
  page07: state.routes.page07,
})

export default connect(mapStateToProps)(Page07)
