import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { prop } from 'styled-tools'

import Text from '../built-in/Text'

const Accent = ({ children }) => {
  return (
    <Element>
      {children}
    </Element>
  )
}

const Element = styled(Text)`
  font-family: ${ prop('theme.font.primary.500')};
  color: ${ prop('theme.colors.font') };
`

Accent.propTypes = {
  children: PropTypes.node
}

export default Accent
