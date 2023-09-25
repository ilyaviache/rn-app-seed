import React from 'react'
import styled, { useTheme } from 'styled-components'
import { 
  PageWrapper, 
  PageHeader,
  ScrollView,
  SectionHeader,
  VerticalCard,
  SvgLotus,
  SvgCalm,
  SvgCircle,
  SvgSnow,
  SvgStars
} from 'src/elements'
import { Column, Box, FlatList } from 'native-base'

const SleepScreen = ({ navigation }) => {
  const theme = useTheme()

  const PRACTICES = [
    { header: 'Мирное дыхание', image: <SvgLotus stroke={theme.colors.border500} width={157} height={157} /> },
    { header: 'Глубокий сон', image: <SvgCalm stroke={theme.colors.border500} width={157} height={157} /> },
    { header: 'Глубокий сон', image: <SvgCircle stroke={theme.colors.border500} width={220} height={217} left={-30} bottom={-38} /> },
    { header: 'Глубокий сон', image: <SvgSnow stroke={theme.colors.border500} width={187} height={187} left={-20} bottom={-8} /> }
  ]

  return (
    <PageWrapper noHeader>
      <Background />
      <ScrollView>
        <Column space={8}>
          <Box>
            <PageHeader>Воздух</PageHeader>
            <PageHeader size='small'>техники глубокого засыпания {"\n"}и успокаивающая музыка</PageHeader>
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
                      marginRight={'12px'}
                      onPress={() => navigation.navigate('SleepPractice')}
                      header={item.header}
                      image={item.image}>
                    </VerticalCard>
                  )
                }}
              />
          </Box>
          <Column style={{ marginBottom: 180 }}>
            <SectionHeader>Курсы</SectionHeader>
          </Column>
        </Column>
      </ScrollView>
    </PageWrapper>
  )
}

const Background = styled(SvgStars)`
  position: absolute;
  right: -20px;
  top: -35px;
`

export default SleepScreen
