const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item{
    _id: ID
    body: String
  }
  type List{
    _id: ID
    title: String
    listItems: [Item]
    createdAt: String
    isPublic: Boolean
  }
  type Note{
    _id: ID
    title: String
    body: String
    createdAt: String
    isPublic: Boolean
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    notes: [Note]
    lists: [List]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    
  }

  type Mutation {
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
    addNote(id: ID!, title: String!, body: String!): User
    deleteNote(userId: ID!, noteId: ID!): User
    editNote(userId: ID!, noteId: ID!, title: String!, body: String!): User
  }
`;
// notes: [Note] save if applicable
module.exports = typeDefs;
