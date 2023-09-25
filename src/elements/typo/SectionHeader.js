import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import { PropTypes } from 'prop-types'
import { prop, switchProp } from 'styled-tools'
import Text from '../built-in/Text'

const SectionHeader = ({ children, ...rest }) => (
  <Element {...rest} >
    {children}
  </Element>
)

SectionHeader.propTypes = {
  children: PropTypes.node
}

const Element = styled(Text) `
  color: ${ prop('theme.colors.font200') };
  font-family: ${ prop('theme.font.primary.500')};
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  padding: 0px 15px 8px;
`

export default memo(SectionHeader)
