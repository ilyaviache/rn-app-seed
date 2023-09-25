import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated'
import {View, Button} from 'react-native'
import React from 'react'
import Switch from 'src/elements/switch'
import Svg, { Circle, Rect, Path } from 'react-native-svg'

import { Column, Box } from 'native-base'
import {
  PageWrapper
} from 'src/elements'

import { PracticeBreathingTracker } from 'src/modules'

const BlankScreen = () => {
  const randomWidth = useSharedValue(10)

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  }

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    }
  })

  return (
    <PageWrapper noHeader>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <Animated.View
          style={[
            {width: 100, height: 80, backgroundColor: 'white', margin: 30},
            style,
          ]}
        />
        <Button
          title="toggle"
          onPress={() => {
            randomWidth.value = Math.random() * 350;
          }}
        />
        <Switch value={true} backgroundColor="green" onChange={console.log}/>
        <PracticeBreathingTracker mt={20}>

        </PracticeBreathingTracker>
      </View>
    </PageWrapper>
  )
}

export default BlankScreen

