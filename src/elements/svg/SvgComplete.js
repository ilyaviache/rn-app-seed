import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComplete({color, ...props}) {
  return (
    <Svg
      width={19}
      height={14}
      viewBox="0 0 19 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.291.96a.5.5 0 010 .707L6.916 13.04a.5.5 0 01-.707 0L.521 7.354a.5.5 0 01.708-.707l5.333 5.333L17.584.96a.5.5 0 01.707 0z"
        fill={color || '#fff'}
      />
    </Svg>
  )
}

export default React.memo(SvgComplete)
