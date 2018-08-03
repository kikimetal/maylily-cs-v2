import React from 'react'

const Btn = ({ children, label, className, ...props }) => (
  <span className={`Btn ${className ? className : ""}`} {...props}>
    <span className="inner">
      {children || label}
    </span>
  </span>
)
Btn.defaultProps = {
  label: "button",
}

export default Btn
