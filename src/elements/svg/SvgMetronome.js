import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgMetronome({ color, ...props}) {
  return (
    <Svg
      width={18}
      height={22}
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 20a2 2 0 002 2h13a2 2 0 002-2L15 2a2 2 0 00-2-2H5a2 2 0 00-2 2L.5 20zm15.504-3.5L14.01 2.138A1.005 1.005 0 0114 2a1 1 0 00-1-1H5a1 1 0 00-1 1 1 1 0 01-.01.138L1.996 16.5H6.55a2.498 2.498 0 011.95-1.95V9.437a2 2 0 010-3.874V3.501l1-.001v2.063a2 2 0 010 3.874v5.113c.98.199 1.751.97 1.95 1.95h4.554zm-4.554 1a2.5 2.5 0 01-4.9 0H1.857l-.355 2.557A1 1 0 002.5 21h13a1 1 0 00.998-.943l-.355-2.557H11.45zM9 18.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-10a1 1 0 100-2 1 1 0 000 2z"
        fill={color || '#fff'}
      />
    </Svg>
  )
}

const MemoSvgMetronome = React.memo(SvgMetronome)
export default MemoSvgMetronome
