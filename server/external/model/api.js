const http = require('../../services/http');
const modelEndpoint = require('./endpoints');

const getModel = async (modelSlug) => {
  const endpoint = modelEndpoint.getModel(modelSlug);
  const {data: {data: result}} = await http.get(endpoint);
  return {model_slug: modelSlug, ...result};
};

const modelApi = {
  getModel,
};

module.exports = modelApi;
