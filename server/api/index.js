const express = require('express');
const modelControl = require('./model');
const API_ROUTES = require('../constants/routes');
const twitterControl = require('./twitter');

const router = express.Router();

router.get(API_ROUTES.MODEL_LIST, modelControl.getList);
router.get(API_ROUTES.MODEL, modelControl.getOne);
router.get(API_ROUTES.SENTIMENT, twitterControl.getSentiments);
router.get(API_ROUTES.PROBLEM, twitterControl.getProblems);

module.exports = router;
