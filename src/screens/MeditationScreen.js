import React from 'react'
import styled, { useTheme } from 'styled-components'
import { 
  PageWrapper,
  PageHeader,
  ScrollView,
  SectionHeader,
  VerticalCard,
  HorizontalCard,
  SvgLotus,
  SvgCalm,
  SvgCircle,
  SvgSnow
} from 'src/elements'
import { Button, Image } from 'react-native'
import { Column, Box, FlatList } from 'native-base'

const MeditationScreen = ({ navigation }) => {
  const theme = useTheme()

  const PRACTICES = [
    { header: 'Базовая медитация', image: <SvgLotus stroke={theme.colors.border500} width={157} height={157} /> },
    { header: 'Любящая доброта', image: <SvgCalm stroke={theme.colors.border500} width={157} height={157} /> },
    { header: 'Любящая доброта', image: <SvgCircle stroke={theme.colors.border500} width={220} height={217} left={-30} bottom={-38} /> },
    { header: 'Любящая доброта', image: <SvgSnow stroke={theme.colors.border500} width={187} height={187} left={-20} bottom={-8} /> }
  ]

  const COURSES = [
    { 
      header: 'Мантра-медитации',
      subheader: 'десятидневный курс',
      text: 'научись культивировать внутреннее спокойствие при помощи прсотой расслабляющей практики медитации',
      image: <CourseImage source={require('assets/images/ornament.png')} /> 
    },
    { 
      header: 'Мантра-медитации',
      subheader: 'десятидневный курс',
      text: 'научись культивировать внутреннее спокойствие при помощи прсотой расслабляющей практики медитации',
      image: <CourseImage source={require('assets/images/ornament.png')} /> 
    },
    { 
      header: 'Мантра-медитации',
      subheader: 'десятидневный курс',
      text: 'научись культивировать внутреннее спокойствие при помощи прсотой расслабляющей практики медитации',
      image: <CourseImage source={require('assets/images/ornament.png')} /> 
    },
  ]

  return (
    <PageWrapper noHeader>
      <ScrollView>
        <Column space={8}>
          <Box>
            <PageHeader>Лотос</PageHeader>
            <PageHeader size='small'>медитативные техники, направленные на обретение равновесия и культивацию внутреннего покоя</PageHeader>
          </Box>
          <Box>
            <SectionHeader>Практика</SectionHeader>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                data={PRACTICES}
                renderItem={({ item }) => {
                  return (
                    <VerticalCard 
                      onPress={() => navigation.navigate('MeditationCourse')}
                      marginRight={'12px'}
                      header={item.header}
                      image={item.image}>
                    </VerticalCard>
                  )
                }}
              />
          </Box>
          <Column>
            <SectionHeader>Курсы</SectionHeader>
            {COURSES.map((item, i) => {
              return (
                <HorizontalCard
                  key={`meditation_${i}`}
                  marginBottom={'8px'}
                  onPress={() => navigation.navigate('MeditationCourse')}
                  header={item.header}
                  subheader={item.subheader}
                  text={item.text}
                  image={item.image}
                />
              )
            })}
          </Column>
        </Column>
      </ScrollView>
    </PageWrapper>
  )
}

const CourseImage = styled(Image)`
  width: 396px;
  height: 396px;
  position: relative;
  right: -198px;
  top: -112px;
`

export default MeditationScreen
