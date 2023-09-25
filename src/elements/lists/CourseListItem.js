import React, { memo } from 'react'
import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import PropTypes from 'prop-types'

import TouchableHighlight from '../built-in/TouchableHighlight'
import Text from '../built-in/Text'
import SvgComplete from '../svg/SvgComplete'
import SvgLock from '../svg/SvgLock'
import SvgArrow from '../svg/SvgArrow'

import { Row, Column } from 'native-base'

const CourseListItem = ({ item, onPress, noBorder, status, ...rest }) => {
  const ICONS = {
    'completed': <SvgComplete />,
    'active': <SvgArrow />,
    'locked': <SvgLock />,
  }
  return (
    <Wrapper onPress={onPress} noBorder={noBorder} disabled={status === 'locked'}>
      <Row
        alignItems='center'
        justifyContent='space-between'
        opacity={status === 'locked' ? 0.3 : 1}
      >
        <Column>
          <Row><Header>{item.title}</Header></Row>
          <Row><Label>{item.day}</Label><Label>{item.time}</Label></Row>
        </Column>
        <Column paddingRight={'10px'}>{ICONS[status]}</Column>
      </Row>
    </Wrapper>
  )
}

CourseListItem.defaultProps = {
  noBorder: false,
  status: 'active'
}

CourseListItem.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
  noBorder: PropTypes.bool,
  status: PropTypes.oneOf(['completed', 'active', 'locked'])
}

const Header = styled(Text)`
  font-size: 21px;
  line-height: 26px;
`

const Label = styled(Text)`
  font-size: 16px;
  line-height: 19px;
  color: ${prop('theme.colors.font250')};
  margin-right: 10px;
  margin-top: 6px;
`

const Wrapper = styled(TouchableHighlight)`
  width: 100%;
  flex: 1;
  padding: 16px;
  border-bottom-width: ${ifProp('noBorder', '0px', '1px')};
  border-bottom-color: ${prop('theme.colors.border500')};
`

export default memo(CourseListItem)
