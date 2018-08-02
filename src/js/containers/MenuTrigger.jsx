import React from "react"
import { connect } from "react-redux"
import { withRouter, NavLink } from "react-router-dom"
import urljoin from "url-join"

// container
// import ConnectedLink from "./ConnectedLink"

const MenuTrigger = props => {
  const { page00, page01, page02 } = props.routes
  return(
    <div
      className={`MenuTrigger ${props.mobileMenuContext || props.isPageMoving ? "collapse" : ""}`}
      onClick={props.toggleMobileMenu}
      >
      <img src={urljoin(props.assetsPath, "img/bars-sm.svg")} alt="ハンバーガーメニューボタン" />
    </div>
  )
}

const mapStateToProps = state => ({
  isPageMoving: state.isPageMoving,
  mobileMenuContext: state.mobileMenuContext,
  routes: state.routes,
  assetsPath: state.assetsPath,
})

import * as action from "../modules/action"
const mapStateToDispatch = dispatch => ({
  toggleMobileMenu: () => dispatch(action.toggleMobileMenu()),
})

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(MenuTrigger))
