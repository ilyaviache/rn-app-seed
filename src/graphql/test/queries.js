import gql from 'graphql-tag'

export const GET_TESTS_QUERY = gql`
  query getTests {
    test {
      id
    }
  }
`
