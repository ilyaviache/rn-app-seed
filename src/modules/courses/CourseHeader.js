import React, { memo } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'
import { VStack } from 'native-base'
import { prop } from 'styled-tools'

import { Text } from 'src/elements'

const CourseHeader = ({ label, header, text, children, ...rest }) => (
  <VStack 
    alignItems='center'
    justifyContent='center'
    paddingTop={4}
    paddingBottom={4}
    space={3}
    {...rest}>
    <Label>{label}</Label>
    <Header>{header}</Header>
    <Body>{text}</Body>
    {children}
  </VStack>
)

CourseHeader.defaultProps = {
}

CourseHeader.propTypes = {
  label: PropTypes.string,
  header: PropTypes.string,
  body: PropTypes.string,
  children: PropTypes.node
}

const Label = styled(Text)`
  font-family: ${prop('theme.font.primary.400')};
  font-size: 22px;
  line-height: 28px;
  text-align: center;
`

const Header = styled(Text)`
  font-family: ${prop('theme.font.primary.400')};
  font-size: 34px;
  line-height: 38px;
  text-align: center;
  margin-top: -6px;
  /* margin-bottom: 2px; */
`

const Body = styled(Text)`
  width: 350px;
  text-align: center;
  font-size: 21px;
  line-height: 25px;
  color: ${ prop('theme.colors.font400') };
`

export default memo(CourseHeader)
