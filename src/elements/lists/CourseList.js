import React, {  memo } from 'react'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import { Box } from 'native-base'

const CourseList = ({ children, ...rest }) => {
  return (
    <Element {...rest}>
      {children}
    </Element>
  )
}

const Element = styled(Box)`
  border: 1px solid ${prop('theme.colors.border500')};
  width: 100%;
  border-radius: 5px;
  background: ${ prop('theme.colors.cardsBackground') };
` 
export default memo(CourseList)
