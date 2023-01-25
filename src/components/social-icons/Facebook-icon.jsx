import * as React from "react"

const FacebookIcon = (props) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={1} y={1} width={46} height={46} rx={23} fill="#000" />
    <path
      d="m29.214 25.328.622-4.095h-3.89v-2.656c0-1.12.542-2.214 2.284-2.214H30v-3.486s-1.605-.277-3.14-.277c-3.205 0-5.298 1.962-5.298 5.512v3.121H18v4.095h3.562v9.9a13.97 13.97 0 0 0 2.191.172c.746 0 1.477-.058 2.192-.172v-9.9h3.269Z"
      fill="#fff"
    />
    <rect
      x={1}
      y={1}
      width={46}
      height={46}
      rx={23}
      stroke="#6C707A"
      strokeWidth={2}
    />
  </svg>
)

export default FacebookIcon
