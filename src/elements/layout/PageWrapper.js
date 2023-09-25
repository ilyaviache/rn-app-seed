import React from 'react'
import { ScrollView, View, StatusBar } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { prop, ifProp } from 'styled-tools'
import { Box } from 'native-base'

const PageWrapper = ({ children, noHeader, ...rest }) => (
  <Element showsVerticalScrollIndicator={false} noHeader={noHeader} {...rest} >
    <StatusBar barStyle="light-content" />
    {children}
  </Element>
)

PageWrapper.defaultProps = {
  noHeader: false
}

PageWrapper.propTypes = {
  children: PropTypes.node,
  noHeader: PropTypes.bool
}

const Element = styled(Box)`
  position: relative;
  background: ${ prop('theme.colors.background') };
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0px 17px;
  margin: 0;
  ${ifProp('noHeader', 'padding-top: 86px;')}
`

const Element1 = styled(ScrollView)`
  position: relative;
  background: ${ prop('theme.colors.background') };
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0px 17px;
  margin: 0;
  ${ifProp('noHeader', 'padding-top: 86px;')}
`

export default PageWrapper
