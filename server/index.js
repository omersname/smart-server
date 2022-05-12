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

(async () => {
  try {
    const userId = '1137030531210653696';
    const url = `https://api.twitter.com/2/users/${userId}`;
    const headers = twitterConfig.authorization();
    const res = await http.get(url, {
      'user.fields': 'withheld',
    }, headers);
    console.log('RESULT:', res.data.data);
  } catch (err) {
    console.error('ERROR:', err);
  }
})();

server.use(API_ROUTES.ROOT, api);

console.log('server is running on port:', process.env.PORT);
server.listen(process.env.PORT);
