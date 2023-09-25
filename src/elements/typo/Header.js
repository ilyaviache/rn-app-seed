import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import { PropTypes } from 'prop-types'
import { prop } from 'styled-tools'
import Text from '../built-in/Text'

const Header = ({ 
  children, 
  fontSize,
  lineHeight,
  padding, 
  ...rest }) => (
  <Element 
    fontSize={fontSize}
    lineHeight={lineHeight}
    padding={padding}
    {...rest} >
    {children}
  </Element>
)

Header.defaultProps = {
  fontSize: 28,
  lineHeight: 34,
  padding: '0px 0px 0px 0px'
}

Header.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  padding: PropTypes.string,
}

const Element = styled(Text) `
  color: ${ prop('color', prop('theme.colors.font')) };
  font-style: normal;
  font-size: ${ prop('fontSize') }px;
  line-height: ${ prop('lineHeight') }px;
  padding: ${ prop('padding') };
  text-align: ${prop('textAlign', 'left')};
`

export default memo(Header)
