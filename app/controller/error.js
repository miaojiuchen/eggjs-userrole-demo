
'use strict';

module.exports = app => {
  class ErrorController extends app.Controller {
    * 404() {
      yield this.ctx.render('404.nj');
    }

    * 403() {
      yield this.ctx.render('403.nj');
    }

    * 500() {
      yield this.ctx.render('500.nj');
    }
  }
  return ErrorController;
};
