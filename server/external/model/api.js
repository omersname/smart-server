import {http} from '../../services/http';
import {modelEndpoint} from './endpoints';

const getModel = async (modelSlug) => {
  console.log(modelSlug);
  const endpoint = modelEndpoint.getModel(modelSlug);
  const {data: {data: result}} = await http.get(endpoint);
  return {model_slug: modelSlug, ...result};
};

export const modelApi = {
  getModel,
};
