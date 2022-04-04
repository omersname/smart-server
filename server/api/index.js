const express = require('express');
const modelControl = require('./model');
const API_ROUTES = require('../constants/routes');
const twitterControl = require('./twitter');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    MODELS: {
      description: 'get list of device models',
      endpoint: `${API_ROUTES.ROOT}${API_ROUTES.MODEL_LIST}`,
    },
    SENTIMENTS: {
      description: 'get model tweets by sentiments',
      endpoint: `${API_ROUTES.ROOT}${API_ROUTES.SENTIMENT}`,
    },
    PROBLEMS: {
      description: 'get model tweets by problems',
      endpoint: `${API_ROUTES.ROOT}${API_ROUTES.PROBLEM}`,
    },
  });
});

router.get(API_ROUTES.MODEL_LIST, modelControl.getList);
router.get(API_ROUTES.MODEL, modelControl.getOne);
router.get(API_ROUTES.SENTIMENT, twitterControl.getSentiments);
router.get(API_ROUTES.PROBLEM, twitterControl.getProblems);

module.exports = router;
