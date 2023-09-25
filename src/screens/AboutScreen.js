import React from 'react'
import { Button, View, Vibration } from 'react-native'
import styled from 'styled-components'
import { prop } from 'styled-tools'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'
import { useQuery } from '@apollo/client'

import { useTheme } from '../contexts/ThemeContext'
import { GET_TESTS_QUERY } from '../graphql/test'
import { useTranslation, changeLanguage, getLanguage } from '../locales'

import { Text } from '../elements'

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true
}

const AboutScreen = ({ navigation }) => {
  const { data, error } = useQuery(GET_TESTS_QUERY)
  const { t } = useTranslation()
  const { isDark, setScheme } = useTheme()
  console.log('data, error', data, error)
  return (
    <Wrapper>
      <Text>{t('hello')}</Text>
        <Button
          title='Go to About'
          onPress={() => navigation.navigate('About')}
        />
        <Button
          title='Change Language'
          onPress={() => changeLanguage(getLanguage() === 'en' ? 'ru' : 'en')}
        />
        <Button
          title='Toggle Theme'
          onPress={() => setScheme(isDark ? 'light' : 'dark')}
        />
        <Button
          title="Vibrate"
          onPress={() => Vibration.vibrate(400)}
        />
        <Button
          title='selection'
          onPress={() => ReactNativeHapticFeedback.trigger('selection', options)}
        />
        <Button
          title='impactLight'
          onPress={() => ReactNativeHapticFeedback.trigger('impactLight', options)}
        />
        <Button
          title='impactMedium'
          onPress={() => ReactNativeHapticFeedback.trigger('impactMedium', options)}
        />
        <Button
          title='impactHeavy'
          onPress={() => ReactNativeHapticFeedback.trigger('impactHeavy', options)}
        />
        <Button
          title='soft'
          onPress={() => ReactNativeHapticFeedback.trigger('soft', options)}
        />
        <Button
          title='rigid'
          onPress={() => ReactNativeHapticFeedback.trigger('rigid', options)}
        />
        <Button
          title='notificationSuccess'
          onPress={() => ReactNativeHapticFeedback.trigger('notificationSuccess', options)}
        />
        <Button
          title='notificationWarning'
          onPress={() => ReactNativeHapticFeedback.trigger('notificationWarning', options)}
        />
        <Button
          title='notificationError'
          onPress={() => ReactNativeHapticFeedback.trigger('notificationError', options)}
        />
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  flex: 1;
  align-items: center; 
  justify-content: center;
  background: ${ prop('theme.colors.background') };
`

export default AboutScreen
