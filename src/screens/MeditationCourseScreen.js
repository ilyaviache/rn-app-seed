import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Spacer } from 'native-base'
import { 
  Image,
  ScrollView,
  PageWrapper,
  PageFooter,
  CourseList,
  CourseListItem
} from 'src/elements'
import { CourseHeader, MantraSwitcher } from 'src/modules'

const LESSONS = [
  { title: 'Знакомство', day: '1 день', time: '15 минут', status: 'completed'},
  { title: 'Принимаем мысли', day: '2 день', time: '18 минут', status: 'completed'},
  { title: 'Уделяем время', day: '3 день', time: '12 минут', status: 'active'},
  { title: 'Манифестируем ожидания', day: '4 день', time: '19 минут', status: 'locked'},
  { title: 'Манифестируем ожидания', day: '4 день', time: '19 минут', status: 'locked'},
  { title: 'Манифестируем ожидания', day: '4 день', time: '19 минут', status: 'locked'},
  { title: 'Манифестируем ожидания', day: '4 день', time: '19 минут', status: 'locked'},
  { title: 'Манифестируем ожидания', day: '4 день', time: '19 минут', status: 'locked'}
]

const LESSON_LENGTH = LESSONS.length
// TODO: Переход на этот экран тормозит при увелечении количества уроков. Нужно рефакторить но позже. Хочу погрузится в этот вопрос поглубже
const MeditationCourseScreen = () => {
  return (
    <PageWrapper noHeader>
      <Background source={require('assets/images/ornament2.png')} />
      <ScrollView>
        <CourseHeader
          label={'10 дней'}
          header={'Мантра-медитации'}
          text={'научись культивировать внутреннее спокойствие освоив простую и расслабляющую практику медитации'}
        >
          <Spacer />
          <MantraSwitcher />
          <CourseList marginTop={'92px'}>
            { LESSONS.map( (item, index) => {
              return (<CourseListItem key={'course_'+index} item={item} status={item.status} noBorder={index === LESSON_LENGTH - 1} />)
            }) }
          </CourseList>
        </CourseHeader>
        <PageFooter marginBottom={'-80px'} />
      </ScrollView>
    </PageWrapper>
  )
}

const Background = styled(Image)`
  position: absolute;
  top: -90px;
  left: -5%;
  width: 110%;
  /* width: 120%; */
`

export default MeditationCourseScreen
