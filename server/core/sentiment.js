import Sentiment from 'sentiment';

const getSentiment = (string) => {
  const sentiment = new Sentiment();
  const {score} = sentiment.analyze(string);
  return score;
};

export const core = {
  getSentiment,
};
