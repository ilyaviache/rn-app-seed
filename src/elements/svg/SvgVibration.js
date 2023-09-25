import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent({ color, ...props }) {
  return (
    <Svg
      width={30}
      height={24}
      viewBox="0 0 30 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 3A1.5 1.5 0 0019 1.5h-8A1.5 1.5 0 009.5 3v18a1.5 1.5 0 001.5 1.5h8a1.5 1.5 0 001.5-1.5V3zM19 .5A2.5 2.5 0 0121.5 3v18a2.5 2.5 0 01-2.5 2.5h-8A2.5 2.5 0 018.5 21V3A2.5 2.5 0 0111 .5h8zM25 6.5a.5.5 0 01.5.5v10a.5.5 0 01-1 0V7a.5.5 0 01.5-.5zM29 8.5a.5.5 0 01.5.5v6a.5.5 0 01-1 0V9a.5.5 0 01.5-.5zM5 6.5a.5.5 0 01.5.5v10a.5.5 0 01-1 0V7a.5.5 0 01.5-.5zM1 8.5a.5.5 0 01.5.5v6a.5.5 0 01-1 0V9a.5.5 0 01.5-.5z"
        fill={color || '#fff'}
      />
    </Svg>
  )
}

const MemoSvgComponent = React.memo(SvgComponent)
export default MemoSvgComponent
