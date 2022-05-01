'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('musicDownload')
      .service('myService')
      .getWelcomeMessage();
  },
};
