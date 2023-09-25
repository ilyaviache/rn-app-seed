import React from 'react'
import { useTheme } from 'styled-components'
import PropTypes from 'prop-types'
import { Center } from 'native-base'

import { SvgKnot } from 'src/elements'

const PageFooter = ({ ...rest }) => {
  const theme = useTheme()
  return (
    <Center
      width={'100%'}
      paddingTop={'32px'}
      paddingBottom={'32px'}
    {...rest} >
      <SvgKnot color={theme.colors.font200} />
    </Center>
  )
}

PageFooter.propTypes = {
  children: PropTypes.node
}

export default PageFooter
