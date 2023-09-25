import React, { memo } from 'react'
import styled, { css } from 'styled-components'
import { PropTypes } from 'prop-types'
import { ifProp, prop } from 'styled-tools'
import { Header } from '../index'
import { Box } from 'native-base'

import { TouchableWithoutFeedback } from 'src/elements'

const VerticalCard = ({ children, header, image, onPress, ...rest }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Element {...rest} >
      <ImageContainer>
        {image}
      </ImageContainer>
      <Header>{header}</Header>
      {children}
    </Element>
  </TouchableWithoutFeedback>
)

VerticalCard.defaultProps = {

}

VerticalCard.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  image: PropTypes.node
}

const Element = styled(Box)`
  position: relative;
  justify-content: space-between;
  width: ${ifProp('children', '172px', '157px')};
  height: ${ifProp('children', '248px', '217px')};;
  border: 1px solid ${ prop('theme.colors.font200') };
  background: ${ prop('theme.colors.cardsBackground') };
  border-radius: 5px;
  padding: 15px;
  overflow: hidden;
`

const ImageContainer = styled.View`
  position: absolute;
  bottom: -79px;
  left: 0px;
`

export default memo(VerticalCard)
