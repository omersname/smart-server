const ROOT = 'http://api-mobilespecs.azharimm.site/v2';

const modelEndpoint = {
  getModel: (slug) => `${ROOT}/${slug}`,
};

module.exports = modelEndpoint;
