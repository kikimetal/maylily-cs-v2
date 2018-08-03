import React from "react"
import urljoin from "url-join"
import { connect } from "react-redux"

import LazyLoadImg from "../components/LazyLoadImg"

const Card = props => {
  return (
    <div className="Card" onTouchStart={() => {}}>
      <div className="image">
        <LazyLoadImg height="100%" src={urljoin(props.assetsPath, props.imgSrc)} position={props.imgPosition} />
      </div>
      <div className="heading">
        {props.children
          ? <span className="word">props.children</span>
          : typeof props.heading === "string"
            ? <span className="word">{props.heading}</span>
            : props.heading.map((word, i) => (
              <span className="word" key={`card-heading-word-key-${i}`}>{word}</span>
            ))
        }
        <span className="sub-heading">{props.subHeading}</span>
        <img className="arrow" src={urljoin(props.assetsPath, "img/arrow-white-right.png")} />
      </div>
    </div>
  )
}

Card.defaultProps = {
  heading: [
    "香りから",
    "生活を豊かに",
  ],
  subHeading: null,
  imgSrc: "img/dummy.jpg",
  imgPosition: "center",
}

const mapStateToProps = state => ({
  assetsPath: state.assetsPath,
})

export default connect(mapStateToProps)(Card)
