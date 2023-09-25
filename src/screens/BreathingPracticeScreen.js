import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import styled, { useTheme } from 'styled-components'
import { Center, Column, Row, Spacer } from 'native-base'
import { 
  Image,
  PageWrapper,
  SubHeader,
  BreathList,
  SvgArrow,
  SvgCalm,
  IconButton,
  Slider
} from 'src/elements'
import { PracticeHeader } from 'src/modules'

const BreathingPracticeScreen = () => {
  const breathing = [{type: 'inhale', time: 4}, {type: 'pause', time: 7}, {type: 'exhalation', time: 8}]
  return (
    <PageWrapper noHeader>
      <Center height={hp('22%')} position='relative' marginTop={hp('5%')}>
        <SvgCalm width={wp('48%')} height={wp('48%')} color={'#fff'} />
      </Center>
      <Column height={hp('36%')} alignItems={'center'} justifyContent='space-between' marginTop={hp('5%')}> 
        <PracticeHeader header={'Покой'} text={'эффективная методика для успокоения нервной системы и обретения внутреннего равновесия'} />
        { breathing && <BreathList paddingLeft={3} paddingRight={3} marginTop={'-20px'} marginBottom={'-2px'} justifyContent={'center'} elements={breathing} /> }
        <Center width='260px'>
          <SubHeader padding={'6px 0px 12px 0px'}>3 цикла: 5 мин. 42 сек.</SubHeader>
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

export default BreathingPracticeScreen
