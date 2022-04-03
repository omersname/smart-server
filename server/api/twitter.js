import {ROUTE_PARAM} from '../constants/params';
import {twitterMethods} from '../methods/twitter';

const getSentiments = async (req, res) => {
  const modelSlug = req.params[ROUTE_PARAM.MODEL_SLUG];
  const sentiments = await twitterMethods.getTweetsByQuery(modelSlug);
  const result = twitterMethods.filterTweetsBySentiment(sentiments);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.send(result);
};

const getProblems = async (req, res) => {
  const modelSlug = req.params[ROUTE_PARAM.MODEL_SLUG];
  const problems = await twitterMethods.getTweetsProblems(modelSlug);
  const result = twitterMethods.filterTweetsByProblem(problems);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.send(result);
};

export const twitterControl = {
  getSentiments,
  getProblems,
};
