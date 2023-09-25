import React, { memo } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import { Image as NativeImage } from 'react-native'

const Image = ({ children, ...rest }) => (
  <Element {...rest} >
    {children}
  </Element>
)

Image.propTypes = {
  children: PropTypes.node
}

const Element = styled(NativeImage)`
`

export default memo(Image)
