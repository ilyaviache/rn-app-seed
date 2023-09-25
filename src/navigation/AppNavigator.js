import React from 'react'
import { useTheme } from 'styled-components'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import BlankScreen from 'src/screens/BlankScreen'
import MainScreen from 'src/screens/MainScreen'
import AboutScreen from 'src/screens/AboutScreen'
import BreathingScreen from 'src/screens/BreathingScreen'
import SleepScreen from 'src/screens/SleepScreen'
import MeditationScreen from 'src/screens/MeditationScreen'
import ConstructorScreen from 'src/screens/ConstructorScreen'

import MeditationCourseScreen from 'src/screens/MeditationCourseScreen'
import SleepPracticeScreen from 'src/screens/SleepPracticeScreen'
import BreathingPracticeScreen from 'src/screens/BreathingPracticeScreen'

import MainTabBar from './MainTabBar'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const defaultHeaderOptions = {
  title: '',
  headerStyle: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0
  },
  headerTransparent: true,
  headerTintColor: '#fff'
}

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName={'Blank'}
      tabBar={props => <MainTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name='Home' component={MainScreen} />
      <Tab.Screen name='Breathing' component={BreathingScreen} />
      <Tab.Screen name='Sleep' component={SleepScreen} />
      <Tab.Screen name='Meditation' component={MeditationScreen} />
      <Tab.Screen name='Blank' component={BlankScreen} />
    </Tab.Navigator>
  ) 
}

// TODO: никак не получается изменить анимацию перехода стаков. Хочу ускорить

const AppNavigator = () => {
  const theme = useTheme()
  return (
    // <Stack.Navigator initialRouteName={'MeditationCourse'}>
    <Stack.Navigator>
      <Stack.Screen name='Main' component={HomeTabs} options={{ headerShown: false }}/>
      <Stack.Screen 
        name={'MeditationCourse'}
        component={MeditationCourseScreen}
        options={defaultHeaderOptions}
      />
      <Stack.Screen 
        name={'SleepPractice'}
        component={SleepPracticeScreen}
        options={defaultHeaderOptions}
      />
      <Stack.Screen 
        name={'BreathingPractice'}
        component={BreathingPracticeScreen}
        options={defaultHeaderOptions}
      />
      <Stack.Screen 
        name={'Constructor'}
        component={ConstructorScreen}
        options={defaultHeaderOptions}
      />
      <Tab.Screen name='About' component={AboutScreen} />
  </Stack.Navigator>
  )
}
export default AppNavigator
