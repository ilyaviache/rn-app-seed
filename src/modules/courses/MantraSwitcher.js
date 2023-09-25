import React, { memo } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import { VStack } from 'native-base'
import { prop } from 'styled-tools'

import { Text, LinkButton } from 'src/elements'

const MantraSwitcher = ({ ...rest }) => (
  <VStack 
    alignItems='center'
    justifyContent='center'
    {...rest}>
    <Body>Твоя мантра: <Label>ши-во-хоом</Label></Body>
    <LinkButton>изменить</LinkButton>
  </VStack>
)

MantraSwitcher.defaultProps = {
}

MantraSwitcher.propTypes = {
  label: PropTypes.string,
  header: PropTypes.string,
  body: PropTypes.string,
  children: PropTypes.node
}

const Label = styled(Text)`
  font-family: ${prop('theme.font.primary.400')};
  font-size: 22px;
  line-height: 26px;
  text-align: center;
`

const Body = styled(Text)`
  text-align: center;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
`

export default memo(MantraSwitcher)
