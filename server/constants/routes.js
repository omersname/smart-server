import {ROUTE_PARAM} from './params';

const PATH = {
  ROOT: 'api',
  MODEL: 'model',
  TWIT: 'tweet',
};

export const API_ROUTES = {
  ROOT: `/${PATH.ROOT}`,
  MODEL_LIST: `/${PATH.MODEL}/list`,
  MODEL: `/${PATH.MODEL}/:${ROUTE_PARAM.MODEL_SLUG}`,
  SENTIMENT: `/${PATH.TWIT}/sentiment/:${ROUTE_PARAM.MODEL_SLUG}`,
  PROBLEM: `/${PATH.TWIT}/problem/:${ROUTE_PARAM.MODEL_SLUG}`,
};
