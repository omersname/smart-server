const {twitterApi} = require('../external/twitter/api');
const {PROBLEM_KEY, SENTIMENT} = require('../constants/params');
const core = require('../core/sentiment');

const getTweetsByQuery = async (query) => {
  const tweets = [];
  let token = undefined;
  for (const _ of [...Array(10)]) {
    const {data, nextToken} = await twitterApi.searchTweets(query, token);
    token = nextToken;
    tweets.push(...data);
  }
  return tweets;
};

const filterTweetsBySentiment = (tweets) => {
  const keys = Object.values(SENTIMENT);
  const obj = keys.reduce((acc, key) => ({...acc, [key]: []}), {});
  return tweets.reduce((acc, t) => {
    const score = core.getSentiment(t);
    const sentiment = score > 0 ? SENTIMENT.POSITIVE : score < 0 ? SENTIMENT.NEGATIVE : SENTIMENT.NEUTRAL;
    return {...acc, [sentiment]: [...acc[sentiment], t]};
  }, obj);
};

const filterTweetsByProblem = (tweets) => {
  const keys = Object.values(PROBLEM_KEY);
  const obj = keys.reduce((acc, key) => ({...acc, [key]: []}), {});
  return tweets.reduce((acc, tweet) => {
    const key = keys.find(k => tweet.includes(k)) ?? PROBLEM_KEY.GENERAL;
    return {...acc, [key]: [...acc[key], tweet]};
  }, obj);
};

const getTweetsProblems = async (modelName) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      try {
        const data = require('../services/data.json');
        const tweets = data[modelName];
        res(tweets);
      } catch (err) {
        rej(err);
      }
    }, 2000);
  });
};

const twitterMethods = {
  getTweetsByQuery,
  getTweetsProblems,
  filterTweetsBySentiment,
  filterTweetsByProblem,
};

module.exports = twitterMethods;
