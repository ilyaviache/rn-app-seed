import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import { PropTypes } from 'prop-types'
import { prop } from 'styled-tools'
import Text from '../built-in/Text'
import Header from '../typo/Header'
import { Box } from 'native-base'

import { TouchableWithoutFeedback, SubHeader as Body } from 'src/elements'

const HorizontalCard = ({ header, subheader, text, image, children, onPress, ...rest }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Element {...rest} >
      <ImageContainer>
        {image}
      </ImageContainer>
      <Header>{header}</Header>
      { subheader && <SubHeader>{subheader}</SubHeader> }
      <Body padding={'6px 42px 4px 0px'}>{text}</Body>
      {children && children}
    </Element>
  </TouchableWithoutFeedback>
)

HorizontalCard.defaultProps = {

}

HorizontalCard.propTypes = {
  children: PropTypes.node,
  image: PropTypes.node,
  header: PropTypes.string,
  subheader: PropTypes.string,
  onPress: PropTypes.func,
  text: PropTypes.string
}

const Element = styled(Box)`
  position: relative;
  width: 100%;
  border: 1px solid ${ prop('theme.colors.font200') };
  background: ${ prop('theme.colors.cardsBackground') };
  /* background: #090909; */
  border-radius: 5px;
  padding: 16px;
  overflow: hidden;
`

const SubHeader = styled(Text)`
  font-size: 16px;
  line-height: 21px;
  opacity: 0.5;
  padding-bottom: 6px;
`

const ImageContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
`

export default memo(HorizontalCard)
