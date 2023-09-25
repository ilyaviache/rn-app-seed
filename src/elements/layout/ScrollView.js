import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ScrollView = ({ children, footerHeight, ...props }) => (
  <Element {...props} >
    {children}
    <Footer footerHeight={footerHeight} />
  </Element>
)

ScrollView.defaultProps = {
  footerHeight: 140
}

ScrollView.propTypes = {
  children: PropTypes.node.isRequired,
  footerHeight: PropTypes.number.isRequired
}

const Element = styled.ScrollView`
`

const Footer = styled.View`
  height: 140px;
`

export default ScrollView
