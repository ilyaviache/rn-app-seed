import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgLock({color, ...props}) {
  return (
    <Svg
      width={20}
      height={22}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 11.688a1.531 1.531 0 100 3.062 1.531 1.531 0 000-3.063zm-2.532 1.53a2.531 2.531 0 115.063 0 2.531 2.531 0 01-5.063 0z"
        fill={color || '#fff'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 14.75a.5.5 0 01.5.5v2.438a.5.5 0 01-1 0V15.25a.5.5 0 01.5-.5z"
        fill={color || '#fff'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.874 8.438a.312.312 0 00-.312.312v11.375c0 .173.14.313.312.313h16.25c.173 0 .313-.14.313-.313V8.75a.313.313 0 00-.313-.313H1.875zM.562 8.75c0-.725.588-1.313 1.312-1.313h16.25c.725 0 1.313.588 1.313 1.313v11.375c0 .725-.588 1.313-1.313 1.313H1.875a1.312 1.312 0 01-1.312-1.313V8.75z"
        fill={color || '#fff'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.125a3.156 3.156 0 00-3.157 3.156v3.657a.5.5 0 01-1 0V4.28a4.156 4.156 0 118.313 0v3.657a.5.5 0 01-1 0V4.28a3.156 3.156 0 00-3.157-3.156z"
        fill={color || '#fff'}
      />
    </Svg>
  )
}

export default React.memo(SvgLock)
