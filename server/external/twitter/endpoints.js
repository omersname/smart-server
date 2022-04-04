const ROOT = 'https://api.twitter.com/2';

const twitterEndpoint = {
  searchTweets: () => `${ROOT}/tweets/search/recent`,
  getTweet: (id) => `${ROOT}/tweets/${id}`,
};

module.exports = twitterEndpoint;
