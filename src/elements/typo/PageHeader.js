import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import { PropTypes } from 'prop-types'
import { prop, switchProp } from 'styled-tools'
import Text from '../built-in/Text'

const PageHeader = ({ children, size, ...rest }) => (
  <Element size={size} {...rest} >
    {children}
  </Element>
)

PageHeader.defaultProps = {
  size: 'big'
}

PageHeader.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['big', 'small'])
}

const Element = styled(Text) `
  color: ${ prop('theme.colors.font') };
  font-style: normal;
  padding: 4px 15px 8px;
  ${switchProp('size', {
    big: css`
      font-size: 44px;
      line-height: 51px;
    `,
    small: css`
      font-size: 22px;
      line-height: 28px;
      opacity: 0.8;
    `
  })}
`

export default memo(PageHeader)
