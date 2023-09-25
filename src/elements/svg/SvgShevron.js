import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgShevron({ color, ...props}) {
  return (
    <Svg
      width={13}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9 16.5L1.5 9 9 1.5"
        stroke={color || '#fff'}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

const MemoSvgShevron = React.memo(SvgShevron)
export default MemoSvgShevron
