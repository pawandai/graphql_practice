const express = require('express');
require('dotenv').config();
const schema = require('../schema/schema.js');
const port = process.env.PORT || 5000;

const app = express();

app.use(
  '/graphql',
  graphQLHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`Server running at ${port}`));
