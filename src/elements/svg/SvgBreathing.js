import * as React from "react"
import Svg, { G, Path, Mask } from "react-native-svg"

function SvgBreathing({ color, ...props}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G opacity={1}>
        <Path d="M17 16a4 4 0 100-8 4 4 0 000 8z" fill="#010101" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM12.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
          fill={color || '#fff'}
        />
        <Path d="M14 11a4 4 0 100-8 4 4 0 000 8z" fill="#010101" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 3.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM9.5 7a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
          fill={color || '#fff'}
        />
        <Path d="M10 11a4 4 0 100-8 4 4 0 000 8z" fill="#010101" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 3.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM5.5 7a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
          fill={color || '#fff'}
        />
        <Path d="M7 16a4 4 0 100-8 4 4 0 000 8z" fill="#010101" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM2.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
          fill={color || '#fff'}
        />
        <Path d="M10 21a4 4 0 100-8 4 4 0 000 8z" fill="#010101" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 13.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM5.5 17a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
          fill={color || '#fff'}
        />
        <Path d="M14 21a4 4 0 100-8 4 4 0 000 8z" fill="#010101" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 13.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM9.5 17a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
          fill={color || '#fff'}
        />
        <Mask
          id="prefix__a"
          maskUnits="userSpaceOnUse"
          x={10}
          y={12}
          width={9}
          height={9}
        >
          <Path d="M14.5 21a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" fill="#010101" />
        </Mask>
        <Mask
          id="prefix__b"
          maskUnits="userSpaceOnUse"
          x={9}
          y={11}
          width={11}
          height={11}
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5 12.5a4 4 0 100 8 4 4 0 000-8zm-5 4a5 5 0 1110 0 5 5 0 01-10 0z"
            fill={color || '#fff'}
          />
        </Mask>
        <G mask="url(#prefix__b)">
          <Path d="M17 16a4 4 0 100-8 4 4 0 000 8z" fill="#010101" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM12.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
            fill={color || '#fff'}
          />
        </G>
        <Path d="M12 16a4 4 0 100-8 4 4 0 000 8z" fill="#010101" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
          fill={color || '#fff'}
        />
      </G>
    </Svg>
  )
}

export default React.memo(SvgBreathing)
