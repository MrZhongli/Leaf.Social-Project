import * as React from "react"

const Rectangle = (props) => (
  <svg
    width={600}
    height={505}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 505V0h347.5C486.952 0 600 113.048 600 252.5S486.952 505 347.5 505H0Z"
      fill="#F3998F"
    />
  </svg>
)

export default Rectangle
