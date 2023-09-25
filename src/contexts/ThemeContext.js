import React, { useEffect, useState } from 'react'
// import {useColorScheme} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { extendTheme, NativeBaseProvider } from 'native-base'
import getTheme from '../utils/theme'

export const ThemeContext = React.createContext({
  isDark: true,
  setScheme: () => {}
});

export const ThemeProvider = ({ children, initTheme = 'dark' }) => {
  // const colorScheme = useColorScheme() // Can be dark | light | no-preference
  const [isDark, setIsDark] = useState(initTheme === 'dark')

  // Listening to changes of device appearance while in run-time
  // useEffect(() => {
  //   setIsDark(colorScheme === "dark")
  // }, [])

  // save theme in async storage here

  const value = {
    isDark,
    setScheme: (scheme) => {
      setIsDark(scheme === "dark")
      AsyncStorage.setItem('@taiga:theme', scheme)
    },
  }
  const theme = extendTheme(getTheme(isDark ? 'dark' : 'light'))

  return (
    <ThemeContext.Provider value={value}>
      <NativeBaseProvider theme={theme}>
        { children }
      </NativeBaseProvider>
    </ThemeContext.Provider>
  )
}

// Custom hook to get the theme object returns {isDark, setScheme}
export const useTheme = () => React.useContext(ThemeContext)
