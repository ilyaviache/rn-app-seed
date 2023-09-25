import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgArrow({color, ...props}) {
  return (
    <Svg
      width={20}
      height={16}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.563 8a.5.5 0 01.5-.5h17.875a.5.5 0 010 1H1.063a.5.5 0 01-.5-.5z"
        fill={color || '#fff'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.271.334a.5.5 0 01.708 0l7.312 7.312a.5.5 0 010 .708l-7.312 7.312a.5.5 0 01-.708-.707L18.231 8l-6.96-6.959a.5.5 0 010-.707z"
        fill={color || '#fff'}
      />
    </Svg>
  )
}

export default React.memo(SvgArrow)
