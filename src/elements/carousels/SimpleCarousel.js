import React, { memo, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'

import Carousel from 'react-native-snap-carousel'
import { Row, Center } from 'native-base'

import IconButton from '../buttons/IconButton'
import SvgShevron from '../svg/SvgShevron'
import SvgShevronRight from '../svg/SvgShevronRight'

const SimpleCarousel = ({ 
    data,
    renderItem,
    space,
    showArrows,
    arrowWidth,
    arrowHeight,
    carouselRef,
    ...props
  }) => {
  const ref = carouselRef || useRef(null)

  const handleNextClick = useCallback(() => {
    ref.current.snapToNext()
  }, [ref?.current])

  const handlePrevClick = useCallback(() => {
    ref.current.snapToPrev()
  }, [ref?.current])

  return (
    <Row space={space} justifyContent='center' alignItems='center'>
      <IconButton onPress={handlePrevClick} variant='ghost'>
        <SvgShevron width={arrowWidth} height={arrowHeight}  />
      </IconButton>
      <Center>
        <Carousel
          ref={ref}
          data={data}
          renderItem={renderItem}
          {...props}
        />
      </Center>
      <IconButton onPress={handleNextClick} variant='ghost'>
        <SvgShevronRight width={arrowWidth} height={arrowHeight} />
      </IconButton>
    </Row>
  )
}

SimpleCarousel.defaultProps = {
  space: 2,
  arrowWidth: 13,
  arrowHeight: 24,
  showArrows: true
}

SimpleCarousel.propTypes = {
  space: PropTypes.number,
  arrowWidth: PropTypes.number,
  arrowHeight: PropTypes.number,
  showArrows: PropTypes.bool,
  carouselRef: PropTypes.object,
  data: PropTypes.array,
  renderItem: PropTypes.func,
}

export default memo(SimpleCarousel)
