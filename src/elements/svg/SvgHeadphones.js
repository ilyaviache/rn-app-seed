import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgHeadphones({ color, ...props}) {
  return (
    <Svg
      width={26}
      height={23}
      top={-1}
      viewBox="0 0 26 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.091.5A12.5 12.5 0 0125.682 13v7a2.5 2.5 0 01-2.5 2.5h-2a2.5 2.5 0 01-2.5-2.5v-5a2.5 2.5 0 012.5-2.5h3.49a11.498 11.498 0 00-11.577-11h-.008a11.5 11.5 0 00-11.576 11H5A2.5 2.5 0 017.5 15v5A2.5 2.5 0 015 22.5H3A2.5 2.5 0 01.5 20v-7A12.5 12.5 0 0113.091.5zM1.5 13.5V20A1.5 1.5 0 003 21.5h2A1.5 1.5 0 006.5 20v-5A1.5 1.5 0 005 13.5H1.5zm23.182 0h-3.5a1.5 1.5 0 00-1.5 1.5v5a1.5 1.5 0 001.5 1.5h2a1.5 1.5 0 001.5-1.5v-6.5z"
        fill={color || '#fff'}
      />
    </Svg>
  )
}

const MemoSvgHeadphones = React.memo(SvgHeadphones)
export default MemoSvgHeadphones
