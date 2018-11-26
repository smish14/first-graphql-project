const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://shubham:test123@ds145043.mlab.com:45043/gql');
mongoose.connection.once('open',() => {
  console.log('connected to db');
});

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000,() => {
  console.log('now listening request on port 4000');
});