const dotenv = require('dotenv');
const express = require('express');
const api = require('./api');
const API_ROUTES = require('./constants/routes');
const http = require('./services/http');
const twitterConfig = require('./external/twitter/config');

dotenv.config();

const server = express();

server.get('/', (req, res) => {
  res.send('GO TO /api TO GET API ENDPOINTS!');
});

server.use(API_ROUTES.ROOT, api);

console.log('server is running on port:', process.env.PORT);
server.listen(process.env.PORT);
