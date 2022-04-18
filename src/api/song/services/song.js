'use strict';

/**
 * song service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::song.song',  ({ strapi }) =>  ({
  // Method 1: Creating an entirely custom service


  async find(params) {
    // some logic here
    const { results, pagination } = await super.find(params);
    // some more logic

    return { results, pagination };
  }

}));
