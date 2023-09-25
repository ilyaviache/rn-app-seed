import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Row } from 'native-base'

import { 
  IconButton,
  SvgVibration,
  SvgMusic,
  SvgHeadphones,
  SvgMetronome,
} from 'src/elements'

const PracticeSoundOptions = (space,...props) => {
  return (
    <Row space={space} {...props}>
      <IconButton variant='ghost'>
        <SvgVibration />
      </IconButton>
      <IconButton active variant='ghost'>
        <SvgMusic />
      </IconButton>
      <IconButton variant='ghost'>
        <SvgHeadphones />
      </IconButton>
      <IconButton variant='ghost'>
        <SvgMetronome left={-4} />
      </IconButton>
    </Row>
  )
}

PracticeSoundOptions.defaultProps = {
  space: 1
}

PracticeSoundOptions.propTypes = {
  space: PropTypes.number
}

export default memo(PracticeSoundOptions)
