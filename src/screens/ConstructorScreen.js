import React, { useState, useEffect, useCallback }  from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { Center, Column, Row, Box, Button } from 'native-base'
import styled, { css } from 'styled-components'
import { prop, ifProp } from 'styled-tools'

import {
  Text,
  LinkButton,
  TouchableWithoutFeedback,
  PageWrapper,
  IconButton,
  SvgPlus,
  SvgCircle,
  SvgCalm,
  SvgLotus,
  SvgArrow,
  SimpleCarousel
} from 'src/elements'

import { 
  PracticeHeader,
  PracticeBreathingSelect,
  PracticeSoundOptions
} from 'src/modules'

const TUTORIAL_STEPS = { 0: 'inactive', 1: 'intro', 2: 'indicator', 3: 'phases', 4: 'options', 5: 'save' }

const ContructorScreen = ({ navigation }) => {
  const [currentTutorialStep, setCurrentTutorialStep] = useState(1)
  const indicators = [ <SvgCalm left={2} width={hp('14%')} height={hp('14%')}/>, <SvgCircle left={-4} width={hp('15%')} height={hp('15%')}/>, <SvgLotus left={2} width={hp('14%')} height={hp('14%')} /> ]
  
  const nextTutorialStep = useCallback(() => {
    console.log('hereeee')
    const nextStep = currentTutorialStep + 1
    setCurrentTutorialStep(TUTORIAL_STEPS[nextStep] ? nextStep : 0)
  }, [currentTutorialStep, setCurrentTutorialStep])

  const exitTutorial = useCallback(() => {
    setCurrentTutorialStep(0)
  }, [setCurrentTutorialStep])

  useEffect(() => {
    currentTutorialStep === 0 ? 
      navigation.setOptions({headerShown: true}) :
      navigation.setOptions({headerShown: false})
  }, [navigation, currentTutorialStep])

  return (
    <PageWrapper noHeader>
      {/* <Box> */}
      <Center zIndex={TUTORIAL_STEPS[currentTutorialStep] === 'indicator' ? 1 : 0} height={hp('22%')} marginTop={hp('3%')}>
        <TutorialBox active={TUTORIAL_STEPS[currentTutorialStep] === 'indicator'} pt={3} pb={3}>
          <SimpleCarousel
            loop
            data={indicators}
            sliderWidth={hp('14%')}
            itemWidth={hp('14%')}
            renderItem={({item}) => (item)}
          />
          <TutorialHeader 
            left={'0px'}
            bottom={'-60px'}
            active={TUTORIAL_STEPS[currentTutorialStep] === 'indicator'}>1. выбери индикатор фазы дыхания</TutorialHeader>
        </TutorialBox>
        <TouchableWithoutFeedback onPress={nextTutorialStep}>
          <TutorialOverlay active={TUTORIAL_STEPS[currentTutorialStep] === 'indicator'} />
        </TouchableWithoutFeedback>
      </Center>
      <Column zIndex={['phases','options'].includes(TUTORIAL_STEPS[currentTutorialStep])  ? 1 : 0} height={hp('40%')} alignItems={'center'} justifyContent='space-between'>
        <PracticeHeader header={'Конструктор'} text={'Настрой необходимые параметры \nи создай собственную \nсхему дыхания'} />
        <TutorialBox pt={hp('2%')} pb={hp('2%')} active={TUTORIAL_STEPS[currentTutorialStep] === 'phases'}>
          <TutorialHeader 
            width={'79%'}
            left={'0px'}
            top={'-40px'}
            active={TUTORIAL_STEPS[currentTutorialStep] === 'phases'}>2. настрой схему упражнения</TutorialHeader>
          <PracticeBreathingSelect paddingLeft={hp('2.4%')} paddingRight={hp('2.4%')} />
          <TutorialText
            width={'100%'}
            left={'0px'}
            bottom={'-30px'}
            textAlign={'center'}
            active={TUTORIAL_STEPS[currentTutorialStep] === 'phases'}
          >
            вдох, пауза, выдох, задержка, кол-во циклов
          </TutorialText>
        </TutorialBox>
        <TutorialBox active={TUTORIAL_STEPS[currentTutorialStep] === 'options'}>
          <TutorialHeader 
            width={'69%'}
            left={'0px'}
            top={'-40px'}
            active={TUTORIAL_STEPS[currentTutorialStep] === 'options'}>3. дополнительные настройки</TutorialHeader>
          <PracticeSoundOptions height={hp('10%')} />
          <TutorialText
            width={'100%'}
            left={'0px'}
            bottom={'-30px'}
            padding={'0px 0px 0px 14px'}
            active={TUTORIAL_STEPS[currentTutorialStep] === 'options'} 
          >
            вибрация, звук, музыка, метроном
          </TutorialText>
        </TutorialBox>
        <TouchableWithoutFeedback onPress={nextTutorialStep}>
          <TutorialOverlay active={['phases','options'].includes(TUTORIAL_STEPS[currentTutorialStep])} />
        </TouchableWithoutFeedback>
      </Column>
      <Row zIndex={TUTORIAL_STEPS[currentTutorialStep] === 'save' ? 3 : 0} space={6} alignItems='center' justifyContent='center' height={hp('20%')}>
        <TutorialBox active={TUTORIAL_STEPS[currentTutorialStep] === 'save'}>
          <TutorialHeader
            width={'100%'}
            left={'0px'}
            top={'-60px'}
            active={TUTORIAL_STEPS[currentTutorialStep] === 'save'}>4. сохрани схему либо запусти приложение</TutorialHeader>
          <Row width={'210px'} pt={hp('2%')} pb={hp('2%')} space={6} alignItems='center' justifyContent='center'>
            <IconButton active>
              <SvgPlus width={28} height={28} />
            </IconButton>
            <IconButton active>
              <SvgArrow width={28} height={28} />
            </IconButton>
          </Row>
        </TutorialBox>
      </Row>
      <TouchableWithoutFeedback onPress={nextTutorialStep}>
        <TutorialOverlay active={TUTORIAL_STEPS[currentTutorialStep] === 'save'} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={nextTutorialStep}>
        <TutorialOverlay active={TUTORIAL_STEPS[currentTutorialStep] === 'intro'}>
          <Column>
            <TutorialIntro padding={'0px 0px 48px 0px'}>
              Конструктор — {"\n"}
              иснтрумент, позволяющий создать
              собственную схему дыхания
            </TutorialIntro>
            <TutorialIntro padding={'0px 18px 0px 0px'}>
              Для знакомства с доступными 
              для настройки параметрами,
              изучи небольшую инструкцию 
            </TutorialIntro>
            <TutorialIntro darker padding={'0px 0px 48px 0px'}>
              (пять простых шагов)
            </TutorialIntro>
            <LinkButton onPress={exitTutorial} mb={4} padding={0} width='132px'>
              нажми здесь чтобы пропустить
            </LinkButton>
          </Column>
        </TutorialOverlay>
      </TouchableWithoutFeedback>
    </PageWrapper>
  )
}

const TutorialOverlay = styled(Box)`
  display: ${ifProp('active', 'flex', 'none')};
  justify-content: center;
  align-items: center;
  flex: 1;
  position: absolute;
  top: -${hp('50%')}px;
  left: -${wp('50%')}px;
  z-index: 2;
  width: ${wp('200%')}px;
  height: ${hp('200%')}px;
  background: rgba(0,0,0,0.93);
`
const TutorialBox = styled(Box)`
  position: relative;
  z-index: ${ ifProp('active', 3, 2)};
  border: 1px solid ${ ifProp('active', prop('theme.colors.border500'), prop('theme.colors.background')) };
  background: #000;
`

const TutorialHeader = styled(Text)`
  display: ${ifProp('active', 'flex', 'none')};
  text-align: ${prop('textAlign', 'left')};
  width: ${prop('width', '50%')};
  padding: ${ prop('padding', '0px') };
  position: absolute;
  font-size: 20px;

  ${ifProp('top', css`
    top: ${prop('top')};
  `)}
  ${ifProp('right', css`
    right: ${prop('right')};
  `)}
  ${ifProp('left', css`
    left: ${prop('left')};
  `)}
  ${ifProp('bottom', css`
    bottom: ${prop('bottom')};
  `)}
`

const TutorialText = styled(TutorialHeader)`
  font-size: 17px;
  color: ${ prop('theme.colors.font300') };
`

const TutorialIntro = styled(Text)`
  position: relative;
  width: ${wp('68%')}px;
  font-size: 20px;
  color: ${ifProp('darker', prop('theme.colors.font300'), prop('theme.colors.font'))};
  padding: ${ prop('padding', '0px') };
`

export default ContructorScreen
