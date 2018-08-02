import React from "react"
import { withRouter, NavLink } from "react-router-dom"
import { connect } from "react-redux"

// components
import Btn from "../components/Btn"
// containers
import MenuTrigger from "./MenuTrigger"

const Menu = props => {
  const { page00, page01, page02 } = props.routes
  return (
    <div className={`Menu ${props.windowSize === "sm" ? "sm" : "md"}`}>

      <div
        className={`container ${props.mobileMenuContext ? "show" : "hide"}`}
        onClick={props.toggleMobileMenu}
        >
        <ul className="link-list">
          <li className="link-list-item"><NavLink exact to={page00.uri}><Btn><i className="fas fa-bug" />{page00.heading.en}</Btn></NavLink></li>
          <li className="link-list-item"><NavLink exact to={page01.uri}><Btn><i className="fab fa-accusoft" />{page01.heading.en}</Btn></NavLink></li>
          <li className="link-list-item"><NavLink exact to={page02.uri}><Btn><i className="fas fa-code" />{page02.heading.en}</Btn></NavLink></li>
        </ul>
      </div>

    </div>
  )
}

const mapStateToProps = state => ({
  windowSize: state.windowSize,
  mobileMenuContext: state.mobileMenuContext,
  routes: state.routes,
})

import * as action from "../modules/action"
const mapStateToDispatch = dispatch => ({
  toggleMobileMenu: () => dispatch(action.toggleMobileMenu()),
})

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Menu))
