const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        firstname: String
        email: String!
        age: Int
        location: String
        gender: String
        preference: [String]
        agerangemin: Int
        agerangemax: Int
        hobbies: String
        aboutme: String
        likes: [String]
        likedby: [String]
        matches: [String]
        img: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        all: [User]
        me: User
    }

    input UserInput {
        username: String
        firstname: String
        email: String
        password: String
        age: Int
        location: String
        gender: String
        preference: [String]
        agerangemin: Int
        agerangemax: Int
        hobbies: String
        aboutme: String
        img: String
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(input: UserInput): Auth
        deleteUser: User
        updateUser(input: UserInput): User
        like(_id: ID): [User]     
        unlike(_id: ID): [User]
    }
`;

module.exports = typeDefs;