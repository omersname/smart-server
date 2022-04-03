const authorization = () => {
  const token = process.env.BEARER_TOKEN;
  return {Authorization: `Bearer ${token}`};
};

export const twitterConfig = {
  authorization,
};
