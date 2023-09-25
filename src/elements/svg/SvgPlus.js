import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgPlus({ color, ...props}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 12a.5.5 0 01.5-.5h22a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
        fill={color || '#fff'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .5a.5.5 0 01.5.5v22a.5.5 0 01-1 0V1a.5.5 0 01.5-.5z"
        fill={color || '#fff'}
      />
    </Svg>
  )
}

const MemoSvgPlus = React.memo(SvgPlus)
export default MemoSvgPlus
