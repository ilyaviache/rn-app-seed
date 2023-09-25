import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function SvgBreathIn({color, props}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={12}
        cy={12}
        r={11.75}
        stroke={color || '#fff'}
        strokeOpacity={0.2}
        strokeWidth={0.6}
      />
      <Circle
        cx={12}
        cy={12}
        r={9.75}
        stroke={color || '#fff'}
        strokeOpacity={0.3}
        strokeWidth={0.6}
      />
      <Circle
        cx={12}
        cy={12}
        r={7.75}
        stroke={color || '#fff'}
        strokeOpacity={0.4}
        strokeWidth={0.6}
      />
      <Circle
        cx={12}
        cy={12}
        r={5.75}
        stroke={color || '#fff'}
        strokeOpacity={0.55}
        strokeWidth={0.6}
      />
      <Circle
        cx={12}
        cy={12}
        r={3.75}
        stroke={color || '#fff'}
        strokeOpacity={0.7}
        strokeWidth={0.6}
      />
      <Circle
        cx={12}
        cy={12}
        r={1.75}
        stroke={color || '#fff'}
        strokeOpacity={0.8}
        strokeWidth={0.6}
      />
    </Svg>
  )
}

const MemoSvgBreathIn = React.memo(SvgBreathIn)
export default MemoSvgBreathIn
