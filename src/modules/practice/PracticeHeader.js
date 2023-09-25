import React, { memo } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import { Center, Spacer } from 'native-base'
import { prop } from 'styled-tools'

import { Header, SubHeader } from 'src/elements'

const PracticeHeader = ({ header, text, ...rest }) => (
  <Center {...rest}>
    <Header textAlign='center'>{header}</Header>
    { text && <SubHeader textAlign='center' padding={'12px 32px 6px 32px'}>{text}</SubHeader>}
  </Center>
)

PracticeHeader.defaultProps = {
}

PracticeHeader.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string
}

export default memo(PracticeHeader)
