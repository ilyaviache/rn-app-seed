import React, { memo } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const TouchableWithoutFeedback = ({ children, onPress, ...rest }) => {
  return <Element onPress={onPress} {...rest}>{children}</Element>
}

TouchableWithoutFeedback.defaultProps = {
  children: <></>
}

TouchableWithoutFeedback.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node
}

const Element = styled.TouchableWithoutFeedback``

export default memo(TouchableWithoutFeedback)
