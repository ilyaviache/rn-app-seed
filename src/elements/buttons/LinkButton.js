import React, {memo} from 'react'
import styled, { useTheme } from 'styled-components'
import { PropTypes } from 'prop-types'
import { prop } from 'styled-tools'
import { Button } from 'native-base'

import Text from '../built-in/Text'
import TouchableHighlight from '../built-in/TouchableHighlight'

const LinkButton = ({ children, onPress, className, ...rest }) => {
  const theme = useTheme()
  return (
    <Button
      backgroundColor={'transparent'}
      fontFamily={theme.font.primary['300']}
      fontSize={theme.colors.font300}
      size="sm"
      variant="link"
      onPress={onPress}
      {...rest}
    >
      <Element className={className}>{children}</Element>
    </Button>
  )
}

LinkButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func
}

const Element = styled(Text) `
  font-family: ${ prop('theme.font.primary.300')};
  color: ${ prop('theme.colors.font300') };
  text-align: left;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.4px;
  text-decoration-line: underline;
  padding: 0;
`

export default memo(LinkButton)
