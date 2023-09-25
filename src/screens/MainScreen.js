import React from 'react'
import { useTheme } from 'styled-components'
import {
  BreathList,
  Accent,
  PageWrapper, 
  PageHeader,
  SectionHeader,
  VerticalCard,
  SvgCalm,
  SvgCircle
} from 'src/elements'
import { Column, Box, FlatList } from 'native-base'

const MainScreen = ({ navigation }) => {
  const theme = useTheme()

  const PRACTICES = [
    { header: 'Покой', breathing: [{type: 'inhale', time: 4}, {type: 'exhalation', time: 8}], image: <SvgCalm stroke={theme.colors.border500} top={-150} right={-40} width={219} height={219} /> },
    { header: 'Ритм', breathing: [{type: 'inhale', time: 4}, {type: 'pause', time: 4}, {type: 'exhalation', time: 4}, {type: 'pause2', time: 4}], image: <SvgCircle top={-150} right={-40} width={219} height={219} stroke={theme.colors.border500} /> },
    { header: 'Флекс', breathing: [{type: 'inhale', time: 4}, {type: 'pause', time: 7}, {type: 'exhalation', time: 8}],image: <SvgCalm stroke={theme.colors.border500} top={-150} right={-40} width={219} height={219} /> },
  ]

  return (
    <PageWrapper noHeader>
      <Column space={8}>
        <Box>
          <PageHeader>Доброго тебе {"\n"}утра, Иван</PageHeader>
          <PageHeader size='small'>ты практикуешь уже <Accent>161 день</Accent> подряд. <Accent>так держать!</Accent> всегда помни:{"\n"}постоянство практики —{"\n"}залог прогресса</PageHeader>
        </Box>
        <Box>
          <SectionHeader>Избранное</SectionHeader>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index}
              data={PRACTICES}
              renderItem={({ item }) => {
                return (
                  <VerticalCard
                    marginRight={'12px'}
                    onPress={() => navigation.navigate('SleepPractice')}
                    header={item.header}
                    image={item.image}>
                    { item.breathing && <BreathList short elements={item.breathing} marginTop={'-2px'} marginBottom={'8px'} /> }
                  </VerticalCard>
                )
              }}
            />
        </Box>
      </Column>
    </PageWrapper>
  )
}

export default MainScreen
