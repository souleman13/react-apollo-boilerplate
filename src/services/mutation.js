import gql from 'graphql-tag'

//write queries here and import them into your other components

//below is an example login mutation syntax in which,
//a JWT and a user ID is returned
//tried to highlight all the points at which you can alter the name of values
export const mutation1 = gql`
mutation ($user: String!, $pass: String!) {
  login(username: $user, password: $pass) {
    token
    id
  }}`
