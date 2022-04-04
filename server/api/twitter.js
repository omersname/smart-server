const {ROUTE_PARAM} = require('../constants/params');
const twitterMethods = require('../methods/twitter');
const data = require('../services/data.json');

const getSentiments = async (req, res) => {
  const modelSlug = req.params[ROUTE_PARAM.MODEL_SLUG];
  // const sentiments = await twitterMethods.getTweetsByQuery(modelSlug);
  const data = require('../services/data.json');
  const sentiments = data[modelSlug];
  const result = twitterMethods.filterTweetsBySentiment(sentiments);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.send(result);
};

const getProblems = async (req, res) => {
  const modelSlug = req.params[ROUTE_PARAM.MODEL_SLUG];
  // const problems = await twitterMethods.getTweetsProblems(modelSlug);
  const data = require('../services/data.json');
  const problems = data[modelSlug];
  const result = twitterMethods.filterTweetsByProblem(problems);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.send(result);
};

const twitterControl = {
  getSentiments,
  getProblems,
};

module.exports = twitterControl;
