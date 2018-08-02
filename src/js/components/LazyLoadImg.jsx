import React from "react"

export default class LazyLoadImg extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isShowPlaceholder: true,
    }
  }
  render(){

    const hidePlaceholder = () => {
      this.setState({isShowPlaceholder: false})
    }

    return (
      <div
        className={`LazyLoadImg ${this.props.className}`}
        style={{height: this.props.height || 0}}
        >

        <img src={this.props.src} onLoad={hidePlaceholder} />
        <div className="img" style={{
            backgroundImage: `url(${this.props.src})`,
            backgroundPosition: this.props.position,
          }}></div>

        <div className={`placeholder ${this.state.isShowPlaceholder ? "show" : "hide"}`}>
          <span>
            <i className="fab fa-quinscape fa-spin"></i>
          </span>
          <span> LOADING...</span>
        </div>
      </div>
    )
  }
}

LazyLoadImg.defaultProps = {
  className: "",
  src: "",
  height: "300px",
  position: "center"
}
