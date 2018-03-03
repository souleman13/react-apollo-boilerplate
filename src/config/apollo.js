import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'

//apollo configuration here

export const client = new ApolloClient({
    link: new HttpLink({ uri: '__YOUR__GRAPHQL__ENDPOINT__' }),
    cache: new InMemoryCache()
  })