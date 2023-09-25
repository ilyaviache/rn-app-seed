import * as React from "react"
import Svg, {
  Path,
  Mask,
  G,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
} from "react-native-svg"

function SvgMoon(props) {
  return (
    <Svg
      width={252}
      height={243}
      viewBox="0 0 252 243"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M135 1h-9C61.935 1 10 52.935 10 117v9c0 64.065 51.935 116 116 116h9c64.065 0 116-51.935 116-116v-9C251 52.935 199.065 1 135 1zm-9-1C61.383 0 9 52.383 9 117v9c0 64.617 52.383 117 117 117h9c64.617 0 117-52.383 117-117v-9C252 52.383 199.617 0 135 0h-9z"
        fill="url(#prefix__paint0_linear)"
        fillOpacity={0.5}
      />
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={10}
        y={1}
        width={241}
        height={241}
      >
        <Path
          d="M10.095 118.094c0-64.617 52.382-117 117-117h6.811c64.617 0 117 52.383 117 117v6.811c0 64.618-52.383 117-117 117h-6.811c-64.618 0-117-52.382-117-117v-6.811z"
          fill="url(#prefix__paint1_diamond)"
        />
      </Mask>
      <G
        mask="url(#prefix__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <Path d="M-107.35 172.312c-12.264-5.195-26.083-10.359-42.366-10.359v-1c16.495 0 30.47 5.234 42.756 10.438 1.545.655 3.063 1.308 4.554 1.951 4.448 1.915 8.667 3.732 12.724 5.188 5.413 1.942 10.49 3.22 15.356 3.22 4.867 0 9.943-1.278 15.356-3.22 4.057-1.456 8.277-3.273 12.724-5.188a802.77 802.77 0 014.555-1.951c12.286-5.204 26.26-10.438 42.756-10.438 16.495 0 30.47 5.234 42.755 10.438a802.77 802.77 0 014.555 1.951c4.448 1.915 8.667 3.732 12.724 5.188 5.413 1.942 10.489 3.22 15.356 3.22 4.867 0 9.943-1.278 15.356-3.22 4.057-1.456 8.276-3.273 12.724-5.188a799.363 799.363 0 014.554-1.951c12.286-5.204 26.261-10.438 42.756-10.438s30.47 5.234 42.756 10.438c1.545.654 3.062 1.308 4.554 1.95 4.448 1.916 8.667 3.733 12.724 5.189 5.413 1.942 10.489 3.22 15.356 3.22 4.867 0 9.943-1.278 15.356-3.22 4.057-1.456 8.276-3.273 12.724-5.188a799.997 799.997 0 014.555-1.951c12.286-5.204 26.26-10.438 42.755-10.438 16.496 0 30.47 5.234 42.756 10.438 1.546.655 3.063 1.308 4.555 1.951 4.447 1.915 8.666 3.732 12.724 5.188 5.413 1.942 10.488 3.22 15.356 3.22 4.867 0 9.943-1.278 15.356-3.22 4.057-1.456 8.276-3.273 12.723-5.188a832.02 832.02 0 014.555-1.951c12.286-5.204 26.261-10.438 42.756-10.438v1c-16.283 0-30.102 5.164-42.366 10.359-1.531.648-3.039 1.298-4.525 1.938-4.456 1.919-8.717 3.754-12.806 5.221-5.457 1.958-10.659 3.279-15.693 3.279-5.035 0-10.237-1.321-15.694-3.279-4.089-1.467-8.349-3.302-12.805-5.221-1.487-.64-2.995-1.29-4.526-1.938-12.264-5.195-26.082-10.359-42.366-10.359-16.283 0-30.101 5.164-42.365 10.359-1.531.648-3.039 1.298-4.526 1.938-4.456 1.919-8.716 3.754-12.805 5.221-5.458 1.958-10.659 3.279-15.694 3.279-5.034 0-10.236-1.321-15.694-3.279-4.089-1.467-8.349-3.302-12.805-5.221-1.486-.64-2.994-1.29-4.525-1.938-12.264-5.195-26.083-10.359-42.366-10.359s-30.102 5.164-42.366 10.359c-1.531.648-3.039 1.298-4.525 1.938-4.456 1.919-8.716 3.754-12.805 5.221-5.458 1.958-10.66 3.279-15.694 3.279-5.035 0-10.236-1.321-15.694-3.279-4.089-1.467-8.35-3.302-12.805-5.221-1.487-.64-2.995-1.29-4.526-1.938-12.264-5.195-26.082-10.359-42.365-10.359-16.284 0-30.102 5.164-42.366 10.359-1.53.648-3.039 1.298-4.525 1.938-4.457 1.919-8.717 3.754-12.806 5.221-5.457 1.958-10.659 3.279-15.694 3.279-5.034 0-10.236-1.321-15.693-3.279-4.09-1.467-8.35-3.302-12.806-5.221-1.486-.64-2.994-1.29-4.525-1.938z" />
        <Path
          d="M-107.351 188.731c-12.264-5.195-26.082-10.359-42.365-10.359v-1c16.495 0 30.47 5.234 42.755 10.438 1.546.654 3.063 1.308 4.555 1.95 4.448 1.916 8.667 3.733 12.724 5.189 5.413 1.941 10.489 3.22 15.356 3.22 4.867 0 9.943-1.279 15.356-3.22 4.057-1.456 8.276-3.273 12.724-5.189 1.492-.642 3.009-1.296 4.554-1.95 12.286-5.204 26.26-10.438 42.756-10.438 16.495 0 30.47 5.234 42.756 10.438 1.545.655 3.063 1.308 4.554 1.95 4.448 1.916 8.667 3.733 12.724 5.189 5.413 1.941 10.49 3.22 15.356 3.22 4.867 0 9.943-1.279 15.356-3.22 4.057-1.456 8.276-3.273 12.724-5.188a799.997 799.997 0 014.555-1.951c12.286-5.204 26.26-10.438 42.756-10.438 16.495 0 30.469 5.234 42.755 10.438 1.546.654 3.063 1.308 4.554 1.95 4.448 1.916 8.667 3.733 12.725 5.189 5.413 1.941 10.489 3.22 15.356 3.22 4.867 0 9.943-1.279 15.356-3.22 4.057-1.456 8.276-3.273 12.724-5.189a879.057 879.057 0 014.554-1.95c12.286-5.204 26.261-10.438 42.756-10.438s30.47 5.234 42.756 10.438c1.545.655 3.062 1.308 4.554 1.95 4.448 1.916 8.667 3.733 12.724 5.189 5.413 1.941 10.489 3.22 15.356 3.22 4.867 0 9.943-1.279 15.356-3.22 4.057-1.456 8.276-3.273 12.724-5.188a799.997 799.997 0 014.555-1.951c12.285-5.204 26.26-10.438 42.755-10.438v1c-16.283 0-30.101 5.164-42.365 10.359-1.531.648-3.039 1.298-4.526 1.938-4.456 1.919-8.716 3.754-12.805 5.221-5.458 1.958-10.659 3.279-15.694 3.279s-10.236-1.321-15.694-3.279c-4.089-1.467-8.349-3.302-12.805-5.221-1.486-.64-2.995-1.29-4.525-1.938-12.264-5.195-26.083-10.359-42.366-10.359s-30.102 5.164-42.366 10.359c-1.531.648-3.039 1.298-4.525 1.938-4.456 1.919-8.716 3.754-12.806 5.221-5.457 1.958-10.659 3.279-15.693 3.279-5.035 0-10.236-1.321-15.694-3.279-4.089-1.467-8.349-3.302-12.805-5.221-1.487-.64-2.995-1.29-4.526-1.938-12.264-5.195-26.082-10.359-42.365-10.359-16.284 0-30.102 5.164-42.366 10.359-1.531.648-3.039 1.298-4.526 1.938-4.456 1.919-8.716 3.754-12.805 5.221-5.457 1.958-10.659 3.279-15.694 3.279-5.034 0-10.236-1.321-15.693-3.279-4.09-1.467-8.35-3.302-12.806-5.221-1.486-.64-2.994-1.29-4.525-1.938-12.264-5.195-26.083-10.359-42.366-10.359s-30.102 5.164-42.365 10.359c-1.531.648-3.04 1.298-4.526 1.938-4.456 1.919-8.716 3.754-12.805 5.221-5.458 1.958-10.66 3.279-15.694 3.279-5.035 0-10.236-1.321-15.694-3.279-4.089-1.467-8.35-3.302-12.805-5.221-1.487-.64-2.995-1.29-4.526-1.938z"
          fillOpacity={0.6}
        />
        <Path
          d="M-107.351 202.96c-12.264-5.194-26.082-10.359-42.365-10.359v-1c16.495 0 30.47 5.234 42.755 10.438 1.546.655 3.063 1.309 4.555 1.951 4.448 1.916 8.667 3.733 12.724 5.188 5.413 1.942 10.489 3.22 15.356 3.22 4.867 0 9.943-1.278 15.356-3.22 4.057-1.455 8.276-3.272 12.724-5.188 1.492-.642 3.009-1.296 4.554-1.951 12.286-5.204 26.26-10.438 42.756-10.438 16.495 0 30.47 5.234 42.756 10.438 1.545.655 3.063 1.309 4.554 1.951 4.448 1.916 8.667 3.733 12.724 5.188 5.413 1.942 10.49 3.22 15.356 3.22 4.867 0 9.943-1.278 15.356-3.22 4.057-1.455 8.276-3.272 12.724-5.188 1.492-.642 3.009-1.296 4.555-1.951 12.286-5.204 26.26-10.438 42.756-10.438 16.495 0 30.469 5.234 42.755 10.438 1.546.655 3.063 1.309 4.554 1.951 4.448 1.916 8.667 3.733 12.725 5.188 5.413 1.942 10.489 3.22 15.356 3.22 4.867 0 9.943-1.278 15.356-3.22 4.057-1.455 8.276-3.272 12.724-5.188 1.491-.642 3.009-1.296 4.554-1.951 12.286-5.204 26.261-10.438 42.756-10.438s30.47 5.234 42.756 10.438c1.545.655 3.062 1.309 4.554 1.951 4.448 1.916 8.667 3.733 12.724 5.188 5.413 1.942 10.489 3.22 15.356 3.22 4.867 0 9.943-1.278 15.356-3.22 4.057-1.455 8.276-3.272 12.724-5.188 1.492-.642 3.009-1.296 4.555-1.951 12.285-5.204 26.26-10.438 42.755-10.438v1c-16.283 0-30.101 5.165-42.365 10.359a893.187 893.187 0 00-4.526 1.938c-4.456 1.92-8.716 3.755-12.805 5.222-5.458 1.957-10.659 3.278-15.694 3.278s-10.236-1.321-15.694-3.278c-4.089-1.467-8.349-3.302-12.805-5.221a809.676 809.676 0 00-4.525-1.939c-12.264-5.194-26.083-10.359-42.366-10.359s-30.102 5.165-42.366 10.359a855.295 855.295 0 00-4.525 1.938c-4.456 1.92-8.716 3.755-12.806 5.222-5.457 1.957-10.659 3.278-15.693 3.278-5.035 0-10.236-1.321-15.694-3.278-4.089-1.467-8.349-3.302-12.805-5.222a893.187 893.187 0 00-4.526-1.938c-12.264-5.194-26.082-10.359-42.365-10.359-16.284 0-30.102 5.165-42.366 10.359a893.187 893.187 0 00-4.526 1.938c-4.456 1.92-8.716 3.755-12.805 5.222-5.457 1.957-10.659 3.278-15.694 3.278-5.034 0-10.236-1.321-15.693-3.278-4.09-1.467-8.35-3.302-12.806-5.222a870.064 870.064 0 00-4.525-1.938c-12.264-5.194-26.083-10.359-42.366-10.359s-30.102 5.165-42.365 10.359a873.77 873.77 0 00-4.526 1.938c-4.456 1.92-8.716 3.755-12.805 5.222-5.458 1.957-10.66 3.278-15.694 3.278-5.035 0-10.236-1.321-15.694-3.278-4.089-1.467-8.35-3.302-12.805-5.222a893.187 893.187 0 00-4.526-1.938z"
          fillOpacity={0.4}
        />
        <Path
          d="M-107.351 217.19c-12.264-5.195-26.082-10.359-42.365-10.359v-1c16.495 0 30.47 5.234 42.755 10.438 1.546.655 3.063 1.308 4.555 1.951 4.448 1.915 8.667 3.733 12.724 5.188 5.413 1.942 10.489 3.22 15.356 3.22 4.867 0 9.943-1.278 15.356-3.22 4.057-1.455 8.276-3.273 12.724-5.188a802.77 802.77 0 014.554-1.951c12.286-5.204 26.26-10.438 42.756-10.438 16.495 0 30.47 5.234 42.756 10.438a802.77 802.77 0 014.554 1.951c4.448 1.915 8.667 3.733 12.724 5.188 5.413 1.942 10.49 3.22 15.356 3.22 4.867 0 9.943-1.278 15.356-3.22 4.057-1.455 8.276-3.272 12.724-5.188a799.997 799.997 0 014.555-1.951c12.286-5.204 26.26-10.438 42.756-10.438 16.495 0 30.469 5.234 42.755 10.438 1.546.655 3.063 1.308 4.554 1.951 4.448 1.915 8.667 3.733 12.725 5.188 5.413 1.942 10.489 3.22 15.356 3.22 4.867 0 9.943-1.278 15.356-3.22 4.057-1.455 8.276-3.273 12.724-5.188a799.363 799.363 0 014.554-1.951c12.286-5.204 26.261-10.438 42.756-10.438s30.47 5.234 42.756 10.438c1.545.655 3.062 1.308 4.554 1.951 4.448 1.915 8.667 3.733 12.724 5.188 5.413 1.942 10.489 3.22 15.356 3.22 4.867 0 9.943-1.278 15.356-3.22 4.057-1.455 8.276-3.272 12.724-5.188a799.997 799.997 0 014.555-1.951c12.285-5.204 26.26-10.438 42.755-10.438v1c-16.283 0-30.101 5.164-42.365 10.359-1.531.648-3.039 1.298-4.526 1.938-4.456 1.92-8.716 3.754-12.805 5.221-5.458 1.958-10.659 3.279-15.694 3.279s-10.236-1.321-15.694-3.279c-4.089-1.467-8.349-3.301-12.805-5.221-1.486-.64-2.995-1.29-4.525-1.938-12.264-5.195-26.083-10.359-42.366-10.359s-30.102 5.164-42.366 10.359c-1.531.648-3.039 1.298-4.525 1.938-4.456 1.92-8.716 3.754-12.806 5.221-5.457 1.958-10.659 3.279-15.693 3.279-5.035 0-10.236-1.321-15.694-3.279-4.089-1.467-8.349-3.301-12.805-5.221-1.487-.64-2.995-1.29-4.526-1.938-12.264-5.195-26.082-10.359-42.365-10.359-16.284 0-30.102 5.164-42.366 10.359-1.531.648-3.039 1.298-4.526 1.938-4.456 1.92-8.716 3.754-12.805 5.221-5.457 1.958-10.659 3.279-15.694 3.279-5.034 0-10.236-1.321-15.693-3.279-4.09-1.467-8.35-3.301-12.806-5.221-1.486-.64-2.994-1.29-4.525-1.938-12.264-5.195-26.083-10.359-42.366-10.359s-30.102 5.164-42.365 10.359c-1.531.648-3.04 1.298-4.526 1.938-4.456 1.92-8.716 3.754-12.805 5.221-5.458 1.958-10.66 3.279-15.694 3.279-5.035 0-10.236-1.321-15.694-3.279-4.089-1.467-8.35-3.301-12.805-5.221-1.487-.64-2.995-1.29-4.526-1.938z"
          fillOpacity={0.3}
        />
        <Path
          d="M-107.351 232.514c-12.264-5.194-26.082-10.359-42.365-10.359v-1c16.495 0 30.47 5.234 42.755 10.438 1.546.655 3.063 1.309 4.555 1.951 4.448 1.916 8.667 3.733 12.724 5.188 5.413 1.942 10.489 3.221 15.356 3.221 4.867 0 9.943-1.279 15.356-3.221 4.057-1.455 8.276-3.272 12.724-5.188 1.492-.642 3.009-1.296 4.554-1.951 12.286-5.204 26.26-10.438 42.756-10.438 16.495 0 30.47 5.234 42.756 10.438 1.545.655 3.063 1.309 4.554 1.951 4.448 1.916 8.667 3.733 12.724 5.188 5.413 1.942 10.49 3.221 15.356 3.221 4.867 0 9.943-1.279 15.356-3.221 4.057-1.455 8.276-3.272 12.724-5.188 1.492-.642 3.009-1.296 4.555-1.951 12.286-5.204 26.26-10.438 42.756-10.438 16.495 0 30.469 5.234 42.755 10.438 1.546.655 3.063 1.309 4.554 1.951 4.448 1.916 8.667 3.733 12.725 5.188 5.413 1.942 10.489 3.221 15.356 3.221 4.867 0 9.943-1.279 15.356-3.221 4.057-1.455 8.276-3.272 12.724-5.188 1.491-.642 3.009-1.296 4.554-1.951 12.286-5.204 26.261-10.438 42.756-10.438s30.47 5.234 42.756 10.438c1.545.655 3.062 1.309 4.554 1.951 4.448 1.916 8.667 3.733 12.724 5.188 5.413 1.942 10.489 3.221 15.356 3.221 4.867 0 9.943-1.279 15.356-3.221 4.057-1.455 8.276-3.272 12.724-5.188 1.492-.642 3.009-1.296 4.555-1.951 12.285-5.204 26.26-10.438 42.755-10.438v1c-16.283 0-30.101 5.165-42.365 10.359a893.187 893.187 0 00-4.526 1.938c-4.456 1.92-8.716 3.755-12.805 5.222-5.458 1.957-10.659 3.279-15.694 3.279s-10.236-1.322-15.694-3.279c-4.089-1.467-8.349-3.302-12.805-5.221a809.676 809.676 0 00-4.525-1.939c-12.264-5.194-26.083-10.359-42.366-10.359s-30.102 5.165-42.366 10.359a855.295 855.295 0 00-4.525 1.938c-4.456 1.92-8.716 3.755-12.806 5.222-5.457 1.957-10.659 3.279-15.693 3.279-5.035 0-10.236-1.322-15.694-3.279-4.089-1.467-8.349-3.302-12.805-5.222a893.187 893.187 0 00-4.526-1.938c-12.264-5.194-26.082-10.359-42.365-10.359-16.284 0-30.102 5.165-42.366 10.359a893.187 893.187 0 00-4.526 1.938c-4.456 1.92-8.716 3.755-12.805 5.222-5.457 1.957-10.659 3.279-15.694 3.279-5.034 0-10.236-1.322-15.693-3.279-4.09-1.467-8.35-3.302-12.806-5.222a870.064 870.064 0 00-4.525-1.938c-12.264-5.194-26.083-10.359-42.366-10.359s-30.102 5.165-42.365 10.359a873.77 873.77 0 00-4.526 1.938c-4.456 1.92-8.716 3.755-12.805 5.222-5.458 1.957-10.66 3.279-15.694 3.279-5.035 0-10.236-1.322-15.694-3.279-4.089-1.467-8.35-3.302-12.805-5.222a893.187 893.187 0 00-4.526-1.938z"
          fillOpacity={0.3}
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M76.551 38.947L48.64 111.738l-.467-.179 27.913-72.79.466.178z"
        fill="#fff"
        fillOpacity={0.08}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M222.083 110.723l-64.723 70.756-109.089-69.62.269-.421 108.735 69.394 64.439-70.447.369.338z"
        fill="#fff"
        fillOpacity={0.08}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M221.789 110.778L76.208 39.082l.22-.448L222.01 110.33l-.221.448z"
        fill="#fff"
        fillOpacity={0.08}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75.725 38.685l-3.903-2.516.27-.42 3.904 2.516 2.516-3.903.42.27-2.516 3.904 3.904 2.516-.271.42-3.904-2.516-2.516 3.904-.42-.271 2.516-3.904z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77.777 45.323l.73 3.382-.488.106-.73-3.383.488-.105zM74.122 28.41l.731 3.383-.489.105-.73-3.382.488-.106zM69.358 40.317l-3.383.73-.105-.488 3.382-.73.106.488zM86.271 36.662l-3.382.731-.106-.489 3.382-.73.106.488z"
        fill="#fff"
        fillOpacity={0.4}
      />
      <G opacity={0.9} fillRule="evenodd" clipRule="evenodd" fill="#fff">
        <Path d="M222.119 109.824l4.78-3.53.297.403-4.78 3.529 3.53 4.78-.403.297-3.529-4.78-4.78 3.53-.297-.403 4.78-3.529-3.529-4.78.402-.297 3.529 4.78z" />
        <Path
          d="M213.37 109.117l-4.33-.651.075-.495 4.329.652-.074.494zM235.018 112.376l-4.33-.652.075-.494 4.329.651-.074.495zM223.122 101.477l.652-4.33.494.075-.651 4.33-.495-.075zM219.864 123.125l.652-4.329.495.074-.652 4.33-.495-.075z"
          fillOpacity={0.4}
        />
      </G>
      <G opacity={0.6} fillRule="evenodd" clipRule="evenodd" fill="#fff">
        <Path d="M48.46 111.227l3.01-.959.152.476-3.01.959.959 3.01-.477.151-.958-3.009-3.01.959-.151-.477 3.01-.959-.96-3.009.477-.152.959 3.01z" />
        <Path
          d="M43.9 109.55l-2.14-1.107.23-.444 2.14 1.106-.23.445zM54.607 115.083l-2.141-1.107.23-.444 2.14 1.107-.23.444zM50.29 107.144l1.106-2.142.444.23-1.107 2.141-.444-.229zM44.757 117.85l1.106-2.142.444.23-1.106 2.141-.444-.229z"
          fillOpacity={0.4}
        />
      </G>
      <Mask
        id="prefix__b"
        maskUnits="userSpaceOnUse"
        x={0}
        y={9}
        width={202}
        height={174}
      >
        <Path
          d="M151.845 161.453c-32.779 0-55.587 20.797-75.39 20.797-4.766 0-9.704-1.204-14.914-3.033L.79 125.331l29.554-69.507 71.148-45.973 93.588 57.466 6.02 63.487-22.986 34.912c-8.026-2.5-16.726-4.263-26.27-4.263z"
          fill="#ffffff"
        />
      </Mask>
      <G mask="url(#prefix__b)">
        <Mask
          id="prefix__c"
          maskUnits="userSpaceOnUse"
          x={71}
          y={60}
          width={118}
          height={118}
        >
          <Path
            d="M188.513 118.763c0 32.343-26.218 58.561-58.561 58.561-32.342 0-58.56-26.218-58.56-58.561 0-32.342 26.218-58.56 58.56-58.56 32.343 0 58.561 26.218 58.561 58.56z"
            fill="#fff"
          />
        </Mask>
        <G mask="url(#prefix__c)">
          <Path
            d="M188.513 118.763c0 32.343-26.218 58.561-58.561 58.561-32.342 0-58.56-26.218-58.56-58.561 0-32.342 26.218-58.56 58.56-58.56 32.343 0 58.561 26.218 58.561 58.56z"
            fill="#fff"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M129.952 176.324c31.79 0 57.561-25.771 57.561-57.561s-25.771-57.56-57.561-57.56-57.56 25.77-57.56 57.56c0 31.79 25.77 57.561 57.56 57.561zm0 1c32.343 0 58.561-26.218 58.561-58.561 0-32.342-26.218-58.56-58.561-58.56-32.342 0-58.56 26.218-58.56 58.56 0 32.343 26.218 58.561 58.56 58.561z"
            fill="#fff"
          />
          <Path
            d="M171.63 99.77c0 32.343-26.218 58.562-58.56 58.562-32.343 0-58.561-26.219-58.561-58.561 0-32.343 26.218-58.561 58.561-58.561 32.342 0 58.56 26.218 58.56 58.56z"
            fill="#000"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M113.07 157.332c31.79 0 57.56-25.771 57.56-57.561S144.86 42.21 113.07 42.21c-31.79 0-57.561 25.77-57.561 57.56 0 31.791 25.77 57.562 57.561 57.562zm0 1c32.342 0 58.56-26.219 58.56-58.561 0-32.343-26.218-58.561-58.56-58.561-32.343 0-58.561 26.218-58.561 58.56 0 32.343 26.218 58.562 58.561 58.562z"
            fill="#fff"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M129.952 176.324c31.79 0 57.561-25.771 57.561-57.561s-25.771-57.56-57.561-57.56-57.56 25.77-57.56 57.56c0 31.79 25.77 57.561 57.56 57.561zm0 1c32.343 0 58.561-26.218 58.561-58.561 0-32.342-26.218-58.56-58.561-58.56-32.342 0-58.56 26.218-58.56 58.56 0 32.343 26.218 58.561 58.56 58.561z"
            fill="#fff"
            fillOpacity={0.11}
          />
        </G>
      </G>
      <Defs>
        <RadialGradient
          id="prefix__paint1_diamond"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 202.5 -143.907 0 139.804 167.473)"
        >
          <Stop stopColor="#fff" />
          <Stop offset={0.427} stopColor="#fff" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={130.5}
          y1={0}
          x2={130.5}
          y2={243}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#262626" stopOpacity={0} />
          <Stop offset={1} stopColor="#262626" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

const MemoSvgMoon = React.memo(SvgMoon)
export default MemoSvgMoon
