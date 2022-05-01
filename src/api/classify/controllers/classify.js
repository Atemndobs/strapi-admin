'use strict';

const fs = require('fs')
/**
 * A set of functions called "actions" for `classify`
 */

module.exports = {
  indxAction :   (ctx, next) => {

  // let classifyService = strapi.service.classify
   // console.log(classifyService)


    try {
      const link = ctx.request.query.link;
      let getSong = strapi.service('api::classify.classify').downloadSongService(link)

      ctx.body = {
        link : ctx.request.query.link,
        status : getSong.status
      }

    } catch (err) {
      ctx.body = err;

      console.log(err)
    }
  },

  analyzeAction: (ctx, next) => {
   try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};

function dd(msg = null){
  console.info({
    msg : msg,
    location : 'You are Here now'
  })

  console.log('*+++++++++++++++++++++++++++++++++++++++++++++++++++++++')
  return  process.exit(0);
}