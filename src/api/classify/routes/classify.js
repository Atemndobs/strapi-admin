module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/classify',
     handler: 'classify.indxAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },

    {
      method: 'POST',
      path: '/classify',
      handler: 'classify.analyzeAction',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
