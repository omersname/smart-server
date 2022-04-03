import express from 'express';
import {modelControl} from './model';
import {API_ROUTES} from '../constants/routes';
import {twitterControl} from './twitter';

const router = express.Router();

router.get(API_ROUTES.MODEL_LIST, modelControl.getList);
router.get(API_ROUTES.MODEL, modelControl.getOne);
router.get(API_ROUTES.SENTIMENT, twitterControl.getSentiments);
router.get(API_ROUTES.PROBLEM, twitterControl.getProblems);

export {router as api};
