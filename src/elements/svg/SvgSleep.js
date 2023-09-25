import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgSleep({ color, ...props}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G opacity={1} fillRule="evenodd" clipRule="evenodd" fill={color || '#fff'}>
        <Path d="M20.25 5.5a.5.5 0 01.5.5v4.5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z" />
        <Path d="M17.5 8.25a.5.5 0 01.5-.5h4.5a.5.5 0 010 1H18a.5.5 0 01-.5-.5zM15.75 1.75a.5.5 0 01.5.5v3a.5.5 0 01-1 0v-3a.5.5 0 01.5-.5z" />
        <Path d="M13.75 3.75a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM9.866 2.74a.5.5 0 01.6.599A8.508 8.508 0 0020.66 13.536a.5.5 0 01.603.39v.001a.5.5 0 01-.004.208A9.5 9.5 0 119.866 2.741zm-.524 1.184a8.501 8.501 0 1010.734 10.734A9.508 9.508 0 019.342 3.924z" />
      </G>
    </Svg>
  )
}

export default React.memo(SvgSleep)
