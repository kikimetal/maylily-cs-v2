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
      <div className="words">
        {props.children
          ? <span className="word">props.children</span>
          : props.words.map((word, i) => (
            <span className="word" key={`card-words-word-key-${i}`}>{word}</span>
          ))
        }
        <span className="subWords">{props.subWords}</span>
        <img className="arrow" src={urljoin(props.assetsPath, "img/arrow-white-right.png")} />
      </div>
    </div>
  )
}

Card.defaultProps = {
  words: [
    "香りから",
    "生活を豊かに",
  ],
  subWords: null,
  imgSrc: "img/dummy.jpg",
  imgPosition: "center",
}

const mapStateToProps = state => ({
  assetsPath: state.assetsPath,
})

export default connect(mapStateToProps)(Card)
