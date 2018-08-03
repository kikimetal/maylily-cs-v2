import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import urljoin from "url-join"
// router switch transition
import { spring, AnimatedSwitch } from "react-router-transition"

// containers
import MyHelmet from "./MyHelmet"
import Page00 from "./Page00"
import Page01 from "./Page01"
import Page02 from "./Page02"
import Menu from "./Menu"
import MenuTrigger from "./MenuTrigger"

// components
import Btn from "../components/Btn"
import NotFound from "../components/NotFound"

// react-router-transition setting
/**
 * custom spring creator
 * 全ての値は数値(int)
 * val: 到達する値
 * stiffness: バネを引く強さ -> 高いほどスピードアップ
 * damping: 抵抗力 -> 高いほどバウンドせず、強さに抗う -> スピードダウン
 */
function bounce(val, override = {}) {
  return spring(val, {
    stiffness: 190,
    damping: 15,
    ...override,
  })
}
// switchRoute animation
const bounceTransitionBase = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    // scale: 1.1,
    // translateY: 0,
    translateY: 20,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    // opacity: bounce(0, {stiffness: 227, damping: 32}),
    opacity: bounce(0, {stiffness: 207, damping: 35}),
    // scale: 1,
    // translateY: 0,
    translateY: bounce(-20, {stiffness: 122, damping: 24})
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    // opacity: bounce(1, {stiffness: 182, damping: 25}),
    opacity: bounce(1, {stiffness: 82, damping: 35}),
    // scale: bounce(1, {stiffness: 210, damping: 33}),
    // scale: bounce(1),
    // translateY: 0,
    translateY: bounce(0, {stiffness: 202, damping: 19}),
  },
}
const bounceTransitionSm = {
  atEnter: {
    opacity: 0,
    scale: 1.1,
    // translateY: 46,
  },
  atLeave: {
    // opacity: bounce(0, {stiffness: 300, damping: 30}),
    // scale: 1,
    // translateY: 0,
  },
  atActive: {
    opacity: bounce(1, {stiffness: 112, damping: 42}),
    scale: bounce(1),
    // translateY: bounce(0, {stiffness: 162, damping: 23}),
  },
}
const bounceTransitionMd = bounceTransitionBase

// we need to map the `scale` prop we define below // to the transform style property
function mapStyles(styles) {
  if (styles.scale && styles.translateY) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale}) translateY(${styles.translateY}px)`,
    }
  }
  if (styles.scale) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    }
  }
  if (styles.translateY) {
    return {
      opacity: styles.opacity,
      transform: `translateY(${styles.translateY}px)`,
    }
  }
  return {
    opacity: styles.opacity,
  }
}

// loader events
window.addEventListener("load", () => {
  // let bg = document.getElementById("loader")
  // bg.classList.add("loader-fade-out")
  let app = document.querySelector(".App")
  app.classList.add("app-fade-in")
})

class App extends React.Component{
  constructor(props) {
    super(props)
    this.props.setWindowSize()
  }

  componentDidMount(){
    window.addEventListener("resize", this.props.setWindowSize)
    this.props.setWindowSize()
    this.props.getNews()
    this.props.getStory()
    // this.props.getService()
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.props.setWindowSize)
  }

  render(){
    const bounceTransition = this.props.windowSize === "sm"
      ? bounceTransitionSm
      : bounceTransitionMd

    return (
      <div className={`App ${this.props.windowSize || "noSetWindowSize"}`}>
        <main>
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className={`animated-switch-wrapper ${!this.props.windowSize === "sm" && "fix-height"}`}
          >
            <Route exact path={this.props.routes.page00.uri} component={Page00} />
            <Route exact path={this.props.routes.page01.uri} component={Page01} />
            <Route exact path={this.props.routes.page02.uri} component={Page02} />
            <Route component={NotFound} />
          </AnimatedSwitch>
        </main>

        <Menu/>
        <MenuTrigger/>
        <MyHelmet />

      </div>
    )
  }
}

const mapStateToProps = state => ({
  windowSize: state.windowSize,
  isPageMoving: state.isPageMoving,
  routes: state.routes,
  assetsPath: state.assetsPath,
})

import * as action from "../modules/action"
const mapStateToDispatch = dispatch => ({
  setWindowSize: () => dispatch(action.setWindowSize()),
  getNews: () => dispatch(action.getNews()),
  getStory: () => dispatch(action.getStory()),
  getService: () => dispatch(action.getService()),
})

// withRouter かまさないと、ページ遷移うまくいかないのだけど、理由が不明...
export default withRouter(connect(mapStateToProps, mapStateToDispatch)(App))
