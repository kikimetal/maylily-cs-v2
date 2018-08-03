import React from "react"
import { connect } from "react-redux"

// components
import Btn from "../components/Btn"
import Heading from "../components/Heading"
import LazyLoadImg from "../components/LazyLoadImg"

// containers
import NewsCardList from "./NewsCardList"
import Card from "./Card"
import Footer from "./Footer"

class Page00 extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    {/*const heading = this.props.routes.page00.heading*/}

    return(
      <div className="Page00 page">

        <Heading main="PickUp" sub="ピックアップ" />

        <NewsCardList />

        <Footer />

      </div>
    )
  }
}

const mapStateToProps = state => ({
  routes: state.routes,
})

export default connect(mapStateToProps)(Page00)
