const apiRoutes = {
  // all tokens
  // getAllTokens: 'http://api.roqqu.com/v2/all-tokens', // will have cors because of mac security I think
  // getAllTokens: 'htt://api.roqqu.com/v2/all-tokens', //will not make it to the browser. When applying the baseurl, you must do so with https
  // getAllTokens: 'httpsm://api.roqqu.com/v2/all-tokens', // will not make it to the browser. When applying the baseurl, you must do so with https
  // getAllTokens: 'https://api.roqqu.com/v2/all-tokens', //will go through straight, with or without baseUrl
  getAllTokens: '/all-tokens', // will reach the browser but only with the help of baseURL(because of the slash), without the base URL you get localhost in place of baseurl, without the / it doesn't make it to the browser
};

export default apiRoutes;
