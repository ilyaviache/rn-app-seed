import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgMusic({ color, ...props }) {
  return (
    <Svg
      width={21}
      height={23}
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 13.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM13.5 16a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM4 16.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM.5 19a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
        fill={color || '#fff'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.306.605A.5.5 0 0120.5 1v14.651a.5.5 0 01-1 0V1.645l-12 3.091V19a.5.5 0 01-1 0V4.349a.5.5 0 01.375-.484l13-3.35a.5.5 0 01.431.09z"
        fill={color || '#fff'}
      />
    </Svg>
  )
}

const MemoSvgMusic = React.memo(SvgMusic)
export default MemoSvgMusic
