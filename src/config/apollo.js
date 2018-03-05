import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'

//apollo configuration here
const endpoint = new HttpLink({ uri: '__YOUR__GRAPHQL__ENDPOINT__' })

//basic auth setup
//graphql/apollo tends to set up auth on a per-request basis
//in which you must get the auth token from local storage and 
//attach it to the header of each request
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

//there may be other middleware that needs to be implemented here

//exporting out the configured client
export const client = new ApolloClient({
    link: authLink.concat(endpoint),
    cache: new InMemoryCache()
  })