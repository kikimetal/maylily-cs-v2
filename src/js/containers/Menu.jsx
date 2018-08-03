import React from "react"
import { withRouter, NavLink } from "react-router-dom"
import { connect } from "react-redux"

// components
import Btn from "../components/Btn"
// containers
import MenuTrigger from "./MenuTrigger"

const Menu = props => {

  const { page00, page01, page02, page03, page04, page05, page06, page07 } = props.routes
  const showList = [page00, page01, page02, page03, page04, page05, page06, page07]

  return (
    <div className={`Menu ${props.windowSize === "sm" ? "sm" : "md"}`}>

      <div
        className={`container ${props.mobileMenuContext ? "show" : "hide"}`}
        onClick={props.toggleMobileMenu}>

        <ul className="link-list">
          {showList.map((route, i) => (
            <li className="link-list-item" key={`menu-link-list-item-${i}`}>
              <NavLink exact to={route.uri}><Btn>{route.heading.main}</Btn></NavLink>
            </li>
          ))}
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
