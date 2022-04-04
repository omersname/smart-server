const Sentiment = require('sentiment');

const getSentiment = (string) => {
  const sentiment = new Sentiment();
  const {score} = sentiment.analyze(string);
  return score;
};

const core = {
  getSentiment,
};

module.exports = core;
