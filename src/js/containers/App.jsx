import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import urljoin from "url-join"
// router switch transition
import { spring, AnimatedSwitch } from "react-router-transition"

// components
import Btn from "../components/Btn"
import NotFound from "../components/NotFound"
// containers
import MyHelmet from "./MyHelmet"
import Menu from "./Menu"
import MenuTrigger from "./MenuTrigger"
// page
import Page00 from "./Page00"
import Page01 from "./Page01"
import Page02 from "./Page02"
import Page02_00 from "./Page02_00"
import Page02_01 from "./Page02_01"
import Page02_02 from "./Page02_02"
import Page02_03 from "./Page02_03"
import Page03 from "./Page03"
import Page04 from "./Page04"
import Page05 from "./Page05"
import Page06 from "./Page06"
import Page07 from "./Page07"

const Pages = [
  Page00,
  Page01,
  Page02,
  Page02_00,
  Page02_01,
  Page02_02,
  Page02_03,
  Page03,
  Page04,
  Page05,
  Page06,
  Page07
]

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
  atEnter: {
    opacity: 0,
    translateY: 20,
  },
  atLeave: {
    opacity: bounce(0, {stiffness: 207, damping: 35}),
    translateY: bounce(-20, {stiffness: 122, damping: 24})
  },
  atActive: {
    opacity: bounce(1, {stiffness: 82, damping: 35}),
    translateY: bounce(0, {stiffness: 202, damping: 19}),
  },
}
const bounceTransitionSm = {
  atEnter: {
    opacity: 0,
    scale: 1.1,
  },
  atLeave: {
  },
  atActive: {
    opacity: bounce(1, {stiffness: 112, damping: 42}),
    scale: bounce(1),
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

// 初回のロードだけのフェードインアニメーション効果
window.addEventListener("DOMContentLoaded", () => {
  let main = document.querySelector("#main")
  main.classList.remove("main-fade-in")
})
window.addEventListener("load", () => {
  let main = document.querySelector("#main")
  main.classList.add("main-fade-in")
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
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.props.setWindowSize)
  }

  render(){
    const bounceTransition = this.props.windowSize === "sm"
      ? bounceTransitionSm
      : bounceTransitionMd

    return (
      <div className={`App app-fade-in ${this.props.windowSize || "noSetWindowSize"}`}>
        <main id="main">
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className={`animated-switch-wrapper`}
          >
            {Object.keys(this.props.routes).map((key, i) => (
              <Route exact path={this.props.routes[key].uri} component={Pages[i]} key={`route-key-${i}`} />

            ))}
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
