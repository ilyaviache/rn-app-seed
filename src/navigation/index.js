import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

const theme = {
  colors: {
    background: "transparent",
  },
}

import AppNavigator from './AppNavigator'
// here is our redux-aware our smart component

const Navigation = () => {
  return (
    <NavigationContainer theme={theme}>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default Navigation
