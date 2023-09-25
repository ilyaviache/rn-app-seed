import React, { memo } from 'react'
import { PropTypes } from 'prop-types'
import { IconButton as NativeIconButton, Icon } from 'native-base'
import { useTheme } from 'styled-components'
import TouchableScale from '@jonny/touchable-scale'

export const IconButton = ({ variant, size, active, onPress, children, ...props}) => {
  const theme = useTheme()
  return (
    <TouchableScale activeScale={0.92} onPress={onPress} >
      <NativeIconButton
        backgroundColor={variant === 'solid' && theme.colors.button500}
        size={`${size}px`}
        borderRadius={`${size/2}px`}
        borderColor={theme.colors.icons1000}
        variant={variant}
        icon={<Icon as={children} color={active ? theme.colors.icons1000 : theme.colors.icons400} />}
        {...props}
      />
    </TouchableScale>
  )
}

IconButton.defaultProps = {
  size: 64,
  variant: 'solid'
}

IconButton.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  active: PropTypes.bool,
  size: PropTypes.number,
  onPress: PropTypes.func,
  variant: PropTypes.oneOf(['solid', 'ghost', 'outline']),
}

export default memo(IconButton)
