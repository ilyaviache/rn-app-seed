import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppNavigation from './src/navigation'
import { ThemeProvider } from './src/contexts/ThemeContext'
import { ApolloProvider } from '@apollo/client'
import makeApolloClient from './src/graphql/client'


const App = () => {
  const [client, setClient] = useState(null)
  const [theme, setTheme] = useState(null)

  const fetchSession = async () => {
    // const session = await AsyncStorage.getItem('@todo-graphql:session')
    // const sessionObj = JSON.parse(session)
    // const { token, id } = sessionObj

    // const client = makeApolloClient(token)
    const client = makeApolloClient()

    setClient(client)
  }

  const fetchTheme = async () => {
    const theme = await AsyncStorage.getItem('@taiga:theme') || 'dark'
    setTheme(theme)
  }

  useEffect(() => {
    fetchSession()
    fetchTheme()
  }, [])

  if(!client || !theme) { return <></> }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider initTheme={theme}>
        <AppNavigation />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
