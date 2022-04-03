const ROOT = 'https://api.twitter.com/2';

export const twitterEndpoint = {
  searchTweets: () => `${ROOT}/tweets/search/recent`,
  getTweet: (id) => `${ROOT}/tweets/${id}`,
};
