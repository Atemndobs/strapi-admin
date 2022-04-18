'use strict';

/**
 * A set of functions called "actions" for `classify`
 */

module.exports = {
  indxAction: async (ctx, next) => {

    process.exit(0)
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  },

  analyzeAction: async (ctx, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
