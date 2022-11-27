const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');

const GraphQLDate = require('./graphql_date.js');
const user = require('./user.js');
const { userInfo } = require('os');

const resolvers = {
  /*Query: {
    about: about.getMessage,
    issueList: issue.list,
  },*/
  Mutation: {
    /*setAboutMessage: about.setMessage,
    issueAdd: issue.add,*/
    addUser: user.add,  
  },
  GraphQLDate,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

function installHandler(app) {
  const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
  console.log('CORS setting:', enableCors);
  server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
}

module.exports = { installHandler };
