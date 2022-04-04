const authorization = () => {
  const token = process.env.BEARER_TOKEN;
  return {Authorization: `Bearer ${token}`};
};

const twitterConfig = {
  authorization,
};

module.exports = twitterConfig;
