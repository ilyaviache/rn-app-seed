import React, { memo } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const TouchableHighlight = ({ children, onPress, ...rest }) => {
  return <Element onPress={onPress} {...rest}>{children}</Element>
}

TouchableHighlight.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node
}

const Element = styled.TouchableHighlight``

export default memo(TouchableHighlight)