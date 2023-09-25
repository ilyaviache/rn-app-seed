import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgHome({color, ...props}) {
  return (
    <Svg
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.159 1.088a1.25 1.25 0 011.681 0l7.5 6.819a1.25 1.25 0 01.41.925V17.5a1.25 1.25 0 01-1.25 1.25h-15A1.25 1.25 0 01.25 17.5V8.832a1.25 1.25 0 01.41-.925l7.499-6.819zm.84.675a.25.25 0 00-.168.065l-7.5 6.819a.25.25 0 00-.081.185V17.5a.25.25 0 00.25.25h15a.25.25 0 00.25-.25V8.832a.25.25 0 00-.082-.185l-7.5-6.82a.25.25 0 00-.169-.064z"
        fill={color || '#262626'}
      />
    </Svg>
  )
}

export default React.memo(SvgHome)
