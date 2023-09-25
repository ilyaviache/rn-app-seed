import React, { memo } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const TouchableOpacity = ({ children, onPress, ...rest }) => {
  return <Element onPress={onPress} {...rest}>{children}</Element>
}

TouchableOpacity.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node
}

const Element = styled.TouchableOpacity``

export default memo(TouchableOpacity)