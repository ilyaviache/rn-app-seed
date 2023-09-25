import React, { memo } from 'react'
import styled, { useTheme } from 'styled-components'
import { prop } from 'styled-tools'
import PropTypes from 'prop-types'
import { Row } from 'native-base'


import { useTranslation } from 'src/locales'

import Text from '../built-in/Text'
import SvgBreathIn from '../svg/SvgBreathIn'
import SvgBreathOut from '../svg/SvgBreathOut'
import SvgBreathHold from '../svg/SvgBreathHold'

const BreathItem = ({ type, time, short, ...rest }) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const ICONS = {
    'inhale': <SvgBreathIn />,
    'pause': <SvgBreathHold />,
    'exhalation': <SvgBreathOut />,
    'pause2': <SvgBreathHold color={theme.colors.border500} />
  }
  return (
    <Row space={'12px'} {...rest}>
      {ICONS[type]}
      { short ? <Label>{time}{t('s')}.</Label> : <Label>{t(type)} {time}{t('s')}.</Label>}
    </Row>
  )
}

BreathItem.propTypes = {
  short: PropTypes.bool,
  type: PropTypes.oneOf(['inhale', 'pause', 'exhalation', 'pause2'])
}

const Label = styled(Text)`
  font-size: 18px;
`

export default memo(BreathItem)
