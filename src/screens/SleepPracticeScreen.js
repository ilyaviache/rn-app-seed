import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import styled, { useTheme } from 'styled-components'
import { Center, Column, Row, Spacer } from 'native-base'
import { 
  Image,
  PageWrapper,
  SubHeader,
  SvgArrow,
  SvgMoon,
  SvgMusic,
  SvgVibration,
  IconButton,
  Slider
} from 'src/elements'
import { PracticeHeader } from 'src/modules'

const SleepPracticeScreen = () => {
  return (
    <PageWrapper noHeader>
      {/* <Background source={require('assets/images/moon.png')} /> */}
      <Center height={hp('26%')} position='relative' marginTop={hp('4%')}>
        <SvgMoon width={wp('62%')} height={wp('62%')} />
      </Center>
      <Column height={hp('32%')} alignItems={'center'} justifyContent='space-between' marginTop={hp('6%')}> 
        <PracticeHeader header={'Базовая осознанность'} text={'практика подойдет тем, \nкто только знакомится \nс медитацией'} />
        <Row>
          <IconButton variant='ghost'>
            <SvgVibration />
          </IconButton>
          <IconButton active variant='ghost'>
            <SvgMusic />
          </IconButton>
        </Row>
        <Center width={wp('60%')}>
          <SubHeader padding={'6px 0px 12px 0px'}>15 минут</SubHeader>
          <Slider/>
        </Center>
      </Column>
      <Center height={hp('18%')}>
        <IconButton active>
          <SvgArrow width={28} height={28} />
        </IconButton>
      </Center>
    </PageWrapper>
  )
}

const Background = styled(Image)`
  width: 251px;
  height: 243px;
`

export default SleepPracticeScreen
