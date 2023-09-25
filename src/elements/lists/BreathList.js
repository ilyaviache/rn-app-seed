import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Row } from 'native-base'

import BreathItem from './BreathItem'

const BreathList = ({ elements, short, ...rest }) => {
  return (
    <Row space={short ? 3 : 4} flexWrap={'wrap'} {...rest}>
      { elements.map( el => <BreathItem key={`BreathItem_${el.type}`} short={short} marginTop={'16px'} type={el.type} time={el.time} />) }
    </Row>
  )
}

BreathList.propTypes = {
  short: PropTypes.bool,
  elements: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['inhale', 'pause', 'exhalation', 'pause2']),
    time: PropTypes.number,
  })).isRequired
}

export default memo(BreathList)
