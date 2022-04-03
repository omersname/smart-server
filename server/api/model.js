import {modelApi} from '../external/model/api';
import {MODEL_SLUG, ROUTE_PARAM} from '../constants/params';

const getList = async (req, res) => {
  const modelSlugs = Object.values(MODEL_SLUG);
  const models = await Promise.all(modelSlugs.map(async slug => await modelApi.getModel(slug)));
  res.send(models);
};

const getOne = async (req, res) => {
  const modelSlug = req.params[ROUTE_PARAM.MODEL_SLUG];
  const model = await modelApi.getModel(modelSlug);
  res.send(model);
};

export const modelControl = {
  getList,
  getOne,
};
