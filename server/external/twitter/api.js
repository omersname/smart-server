const twitterEndpoint = require('./endpoints');
const http = require('../../services/http');
const twitterConfig = require('./config');

const searchTweets = async (query, token) => {
  const endpoint = twitterEndpoint.searchTweets();
  const headers = twitterConfig.authorization();
  const {data: {data, meta: {next_token: nextToken}}} = await http.get(endpoint, {
    query: `${query} lang:en -is:retweet`,
    max_results: 100,
    next_token: token,
  }, headers);
  return {data, nextToken};
};

const getTweet = async (tweetId) => {
  const endpoint = twitterEndpoint.getTweet(tweetId);
  const headers = twitterConfig.authorization();
  const {data: {data: result}} = await http.get(endpoint, {}, headers);
  return result;
};

const twitterApi = {
  searchTweets,
  getTweet,
};

module.exports = twitterApi;
