import React from "react"
import { NavLink, Link } from "react-router-dom"
import { connect } from "react-redux"
import urljoin from "url-join"

// components
import LazyLoadImg from "../components/LazyLoadImg"

const Card = props => {
  {/*bool: srcがhttpから始まる文字列の場合、assetsPath と結合せずに処理*/}
  const isImgSrcExternal = props.img.src.indexOf("http") === 0

  const content = (
    <div>
      <div className="image">
        <LazyLoadImg
          height="100%"
          src={
            isImgSrcExternal
              ? props.img.src
              : urljoin(props.assetsPath, props.img.src || props.defaultImg)}
          position={props.img.position}
          />
        </div>
        <div className="heading">
          {props.children
            ? <span className="word">props.children</span>
            : typeof props.heading.main === "string"
            ? <span className="word">{props.heading.main}</span>
            : props.heading.main.map((word, i) => (
              <span className="word" key={`card-heading-word-key-${i}`}>{word}</span>
            ))
          }
          <span className="sub-heading">{props.heading.sub}</span>
          <img className="arrow" src={urljoin(props.assetsPath, "img/arrow-white-right.png")} />
        </div>
    </div>
  )

  return (
    <div className="Card" onTouchStart={() => {}}>
      { props.date && <span className="date">{props.date}</span> }
      {
        !props.link
          ? content
          : props.link.indexOf("http") === 0
            ? <a href={props.link}>{content}</a>
            : <NavLink to={props.link}>{content}</NavLink>
      }
    </div>
  )
}

Card.defaultProps = {
  date: null,
  heading: {
    main: ["香りから", "生活を豊かに"],
    sub: null,
  },
  img: {
    src: "img/dummy.jpg",
    alt: "ダミー画像です",
    position: "center",
  },
  link: null,
  defaultImg: "img/dummy.jpg",
}

const mapStateToProps = state => ({
  assetsPath: state.assetsPath,
})

export default connect(mapStateToProps)(Card)
