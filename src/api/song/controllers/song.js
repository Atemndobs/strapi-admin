'use strict';

/**
 *  song controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::song.song', ({ strapi }) =>  ({

  async find(ctx) {
    // some logic here

    const { data, meta } = await super.find(ctx);

    data.forEach((song) => {
    //  console.log(song)
    })
    // some more logic

    return { data, meta };
  }

}));
