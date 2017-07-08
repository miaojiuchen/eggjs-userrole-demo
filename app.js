'use strict';

module.exports = app => {
  app.beforeStart(function* () {
    console.log(app)
  });
};
