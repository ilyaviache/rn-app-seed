import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgBreathHold({color, ...props}) {
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
        d="M12 23.5c6.351 0 11.5-5.149 11.5-11.5S18.351.5 12 .5.5 5.649.5 12 5.649 23.5 12 23.5zm0 .5c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        fill={color || '#999'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21.5a9.5 9.5 0 100-19 9.5 9.5 0 000 19zm0 .5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        fill={color || '#999'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 19.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm0 .5a8 8 0 100-16 8 8 0 000 16z"
        fill={color || '#999'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 17.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 .5a6 6 0 100-12 6 6 0 000 12z"
        fill={color || '#999'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0 .5a4 4 0 100-8 4 4 0 000 8z"
        fill={color || '#999'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 .5a2 2 0 100-4 2 2 0 000 4z"
        fill={color || '#999'}
      />
    </Svg>
  )
}

const MemoSvgBreathHold = React.memo(SvgBreathHold)
export default MemoSvgBreathHold
