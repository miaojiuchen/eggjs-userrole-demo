'use strict';

module.exports = app => {
  class AccountController extends app.Controller {
    * login() {
      yield this.ctx.render('login.nj');
    }

    * loginPost() {
      const { userId, userName, isAdmin } = this.ctx.request.body;
      this.ctx.session.user = {
        userId,
        userName,
        isAdmin: !!isAdmin
      };
      this.ctx.redirect('/');
    }
  }
  return AccountController;
};
