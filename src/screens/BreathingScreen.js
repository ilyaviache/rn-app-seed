import React from 'react'
import styled, { useTheme } from 'styled-components'
import { prop } from 'styled-tools'
import { 
  Image,
  PageWrapper,
  ScrollView,
  PageHeader,
  SectionHeader,
  HorizontalCard,
  BreathList,
  SvgLotus,
  SvgCalm,
  SvgCircle,
  SvgSnow
} from 'src/elements'
import { Column, Box } from 'native-base'

const BreathingScreen = ({ navigation }) => {
  const theme = useTheme()
  const COURSES = [
    { 
      header: 'Вим Хоф',
      text: 'техника интенсивного дыхания, чередующая глубокие вдохи и выдохи с длительной задержкой',
      image: <SvgSnow stroke={theme.colors.border400} top={-55} right={-40} width={179} height={205} />
    },
    { 
      header: 'Покой',
      text: 'эффективная методика для успокоения нервной системы и обретения внутреннего равновесия',
      breathing: [{type: 'inhale', time: 4}, {type: 'pause', time: 7}, {type: 'exhalation', time: 8}],
      image: <SvgCalm stroke={theme.colors.border400} top={-50} right={-60} width={200} height={200} />
    },
    { 
      header: 'Ритм',
      text: 'техника дыхания, направленная \nна повышение концентрации и производительности, а также снимающая стресс',
      breathing: [{type: 'inhale', time: 4}, {type: 'pause', time: 4}, {type: 'exhalation', time: 4}, {type: 'pause2', time: 4}],
      image: <SvgCircle stroke={theme.colors.border400} top={-60} right={-90} width={250} height={250} />
    },
    { 
      header: 'Лотос',
      text: 'используй эту технику первым делом после пробуждения, чтобы зарядиться энергией и приготовиться к новому дню',
      breathing: [{type: 'inhale', time: 6}, {type: 'pause', time: 2}],
      image: <SvgLotus stroke={theme.colors.border400} top={-70} right={-70} width={217} height={217} />
    }
  ]

  return (
    <PageWrapper noHeader>
      <ScrollView>
        <Column space={8}>
          <Box>
            <PageHeader>Пламя</PageHeader>
            <PageHeader size='small'>дыхательные упражнения {"\n"}на все случаи жизни</PageHeader>
          </Box>
          <SectionHeader>Конструктор</SectionHeader>
          <Box marginTop={-8} marginBottom={-8}>
            <DashedCard
              onPress={() => navigation.navigate('Constructor')}
              header={'Конструктор'}
              text={'настрой необходимые параметры и создай свою собственную схему дыхания'}
            />
          </Box>
          <Box>
          </Box>
          <Column>
            <SectionHeader>Дыхательные упражнения</SectionHeader>
            {COURSES.map((item, i) => {
              return (
                <HorizontalCard
                  key={`breath_${i}`}
                  onPress={() => navigation.navigate('BreathingPractice')}
                  marginBottom={'16px'}
                  header={item.header}
                  subheader={item.subheader}
                  text={item.text}
                  image={item.image}
                >
                  { item.breathing && <BreathList elements={item.breathing} marginTop={'-2px'} marginBottom={'8px'} /> }
                </HorizontalCard>
              )
            })}
          </Column>
        </Column>
      </ScrollView>
    </PageWrapper>
  )
}

const DashedCard = styled(HorizontalCard)`
  border: 1px dashed ${ prop('theme.colors.font200') };
`

const CourseImage = styled(Image)`
  width: 396px;
  height: 396px;
  position: relative;
  right: -198px;
  top: -112px;
`

export default BreathingScreen
