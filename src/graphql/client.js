import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { getMainDefinition } from '@apollo/client/utilities'

const makeApolloClient = (token) => {
  const linkHeaders = token ? { Authorization: `Bearer ${token}` } : {}
  
  const cache = new InMemoryCache()
  
  const httpLink = new HttpLink({
    uri: `https://api-dev.sizle.io/v1/graphql`,
    headers: {
      ...linkHeaders
    }
  })

  const wsLink = new WebSocketLink({
    uri: 'wss://api-dev.sizle.io/v1/graphql',
    options: {
      reconnect: true,
      timeout: 600000,
      reconnectionAttempts: 10,
      lazy: true,
      inactivityTimeout: 6000000,
      connectionParams: {
        headers: {
          ...linkHeaders
        }
      }
    }
  })

  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    httpLink
  )

  if (wsLink && wsLink.subscriptionClient) {
    wsLink.subscriptionClient.maxConnectTimeGenerator.duration = () => wsLink.subscriptionClient.maxConnectTimeGenerator.max
  }

  const client = new ApolloClient({
    link,
    cache,
    connectToDevTools: process.env.NODE_ENV === 'development'
  })

  return client
}

export default makeApolloClient
