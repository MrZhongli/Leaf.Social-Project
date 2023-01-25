import * as React from "react"

const LinkedinIcon = (props) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={1} y={1} width={46} height={46} rx={23} fill="#000" />
    <g clipPath="url(#a)">
      <path
        d="M34.228 12H13.772A1.772 1.772 0 0 0 12 13.772v20.456A1.772 1.772 0 0 0 13.772 36h20.456A1.772 1.772 0 0 0 36 34.228V13.772A1.772 1.772 0 0 0 34.228 12ZM19.153 32.445h-3.608V20.983h3.608v11.462Zm-1.806-13.05a2.072 2.072 0 1 1 2.083-2.07 2.041 2.041 0 0 1-2.083 2.07Zm15.106 13.06h-3.606v-6.262c0-1.846-.785-2.416-1.799-2.416-1.07 0-2.12.806-2.12 2.463v6.215H21.32V20.992h3.47v1.588h.047c.348-.705 1.568-1.91 3.43-1.91 2.013 0 4.188 1.195 4.188 4.695l-.002 7.09Z"
        fill="#fff"
      />
    </g>
    <rect
      x={1}
      y={1}
      width={46}
      height={46}
      rx={23}
      stroke="#6C707A"
      strokeWidth={2}
    />
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(12 12)" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default LinkedinIcon
