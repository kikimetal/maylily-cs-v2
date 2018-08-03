import React from "react"
import { connect } from "react-redux"

// components
import Heading from "../components/Heading"
// containers
import Card from "./Card"
import Footer from "./Footer"

const Page02 = props => {

  const { page02_00, page02_01, page02_02, page02_03 } = props.routes
  const showList = [page02_00, page02_01, page02_02, page02_03]

  return (
    <div className="Page02 page">

      <Heading main={props.page02.heading.main} sub={props.page02.heading.sub} />

      {showList.map((route, i) => (
        <Card
          key={"about-card-item-" + i}
          date={null}
          heading={{
            main: route.heading.main,
            sub: route.heading.sub,
          }}
          img={{
            src: "",
            alt: "",
            position: "",
          }}
          link={route.uri}
          />
      ))}

      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  routes: state.routes,
  page02: state.routes.page02,
})

export default connect(mapStateToProps)(Page02)
