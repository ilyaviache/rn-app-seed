import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgShevronRight({ color, ...props}) {
  return (
    <Svg
      width={13}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 1.5L8.5 9 1 16.5"
        stroke={color || '#fff'}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

const MemoSvgShevronRight = React.memo(SvgShevronRight)
export default MemoSvgShevronRight
