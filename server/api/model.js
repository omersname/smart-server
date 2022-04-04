const modelApi = require('../external/model/api');
const {MODEL_SLUG, ROUTE_PARAM} = require('../constants/params');

const getList = async (req, res) => {
  const modelSlugs = Object.values(MODEL_SLUG);
  // const models = await Promise.all(modelSlugs.map(async slug => await modelApi.getModel(slug)));
  res.send(modelSlugs);
};

const getOne = async (req, res) => {
  const modelSlug = req.params[ROUTE_PARAM.MODEL_SLUG];
  const model = await modelApi.getModel(modelSlug);
  res.send(model);
};

const modelControl = {
  getList,
  getOne,
};

module.exports = modelControl;
