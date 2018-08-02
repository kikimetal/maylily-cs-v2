import React from "react"
import { connect } from "react-redux"

// components
import Heading from "../components/Heading"
// containers
import Footer from "./Footer"

const Page02 = props => {

  return (
    <div className="Page02 page">

      <Heading en={props.page02.heading.en} ja={props.page02.heading.ja} />
      {console.log(props.service)}

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  // routes: state.routes,
  page02: state.routes.page02,
  service: state.service,
})

export default connect(mapStateToProps)(Page02)
