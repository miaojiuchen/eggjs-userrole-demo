'use strict';

module.exports = app => {
  class AdminController extends app.Controller {
    * index() {
      yield this.ctx.render('admin.nj', { user: this.ctx.user });
    }
  }
  return AdminController;
};
