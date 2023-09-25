import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import { PropTypes } from 'prop-types'
import { prop } from 'styled-tools'
import Text from '../built-in/Text'

const SubHeader = ({ 
  children, 
  fontSize,
  lineHeight,
  padding,
  color,
  ...rest }) => (
  <Element 
    fontSize={fontSize}
    lineHeight={lineHeight}
    padding={padding}
    {...rest} >
    {children}
  </Element>
)

SubHeader.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  padding: PropTypes.string,
  color: PropTypes.string
}

const Element = styled(Text) `
  color: ${ prop('color', prop('theme.colors.font300')) };
  font-style: normal;
  font-size: ${ prop('fontSize', 19) }px;
  line-height: ${ prop('lineHeight', 23) }px;
  padding: ${ prop('padding', '6px 0px 6px 0px') };
  text-align: ${prop('textAlign', 'left')};
`

export default memo(SubHeader)
