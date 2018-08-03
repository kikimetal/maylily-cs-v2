import React from "react"
import { connect } from "react-redux"

// components
import Heading from "../components/Heading"
// containers
import Card from "./Card"
import Footer from "./Footer"

const Page05 = props => {

  const { heading } = props.page05

  return (
    <div className="Page05 page">

      <Heading main={heading.main} sub={heading.sub} />

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  routes: state.routes,
  page05: state.routes.page05,
})

export default connect(mapStateToProps)(Page05)
