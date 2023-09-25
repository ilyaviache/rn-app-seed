import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import { Box } from 'native-base'
import Svg, { Circle, Rect, Path } from 'react-native-svg'

import drawArc from 'src/utils/drawArc'

const PracticeBreathingTracker = ({...rest}) => {
  // const breathing = [{type: 'inhale', time: 9}, {type: 'exhalation', time: 4}]
  const breathing = [{type: 'inhale', time: 9}, {type: 'pause', time: 9}, {type: 'exhalation', time: 9}, {type: 'pause', time: 9}]
  const totalSec = breathing.reduce((acc, el) => { return acc + el.time; }, 0)

  const gapSizeDegree = 5
  const availableDegree = 360 - breathing.length * gapSizeDegree
  const oneSecDegree = availableDegree / 36
  const k = availableDegree / (totalSec * oneSecDegree)
  const D = []

  breathing.map((el, index) => {
    const prevEnd = index === 0 ? -(gapSizeDegree / 2) : D[index - 1].end
    D.push({
      start: prevEnd + gapSizeDegree,
      end: prevEnd + (el.time * oneSecDegree * k) + gapSizeDegree,
      type: el.type
    })
  })

  return (
    <Box {...rest}>
      <Svg>
        {D.map((el) => (
          <Arc
            stroke='#fff'
            strokeWidth='2'
            fill='none'
            opacity={0.15}
            d={drawArc(150, 151, 150, el.start, el.end)}
          />
        ))}
      </Svg>
    </Box>
  )
}

const Arc = styled(Path)`
  opacity: ${prop('opacity', '1')};
`

PracticeBreathingTracker.propTypes = {

}

export default memo(PracticeBreathingTracker)
