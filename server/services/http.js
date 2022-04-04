const axios = require('axios');
const devMethods = require('../methods/dev');

const get = async (url, params, headers) => {
  try {
    return await axios.get(url, {
      params,
      headers,
    });
  } catch (err) {
    const message = err.response.data.detail;
    devMethods.newError(message);
  }
};

const post = async (url, data, headers) => {
  try {
    return await axios.post(url, data, {headers});
  } catch (err) {
    const message = err.response.data.detail;
    devMethods.newError(message);
  }
};

const http = {
  get,
  post,
};

module.exports = http;
