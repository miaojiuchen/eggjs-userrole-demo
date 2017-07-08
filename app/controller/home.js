'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      yield this.ctx.render('home.nj', { user: this.ctx.user });
    }
  }
  return HomeController;
};
