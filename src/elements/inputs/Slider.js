import React, { memo } from 'react'
import { PropTypes } from 'prop-types'
import { Slider as NativeSlider, Box } from 'native-base'
import { useTheme } from 'styled-components'

export const Slider = ({ variant, size, active, children, ...props}) => {
  const theme = useTheme()
  return (
    <NativeSlider defaultValue={40} colorScheme="light">
      <NativeSlider.Track borderWidth={1} backgroundColor={'#323232'}>
        <NativeSlider.FilledTrack backgroundColor={'#e8e8e8'} />
      </NativeSlider.Track>
      <NativeSlider.Thumb backgroundColor={'#fff'} />
    </NativeSlider>
  )
}

Slider.defaultProps = {
  size: 64,
  variant: 'solid'
}

Slider.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  active: PropTypes.bool,
  size: PropTypes.number,
  variant: PropTypes.oneOf(['solid', 'ghost', 'outline']),
}

export default memo(Slider)
