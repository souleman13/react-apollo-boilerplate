import gql from 'graphql-tag';

//write queries here and import them into your other components
//example syntax below queries a user by a specifc, given id
//return id, name, email for that User

export const query1 = gql`
query ($userID: ID!) {
  User(id: $userID) {
    id
    name
    email
  }
}
`