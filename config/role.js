'use strict';

module.exports = app => {
  app.role.use('admin', function () {
    return this.user && !!this.user.isAdmin;
  });

  app.role.failureHandler = function (action) {
    if (this.acceptJSON) {
      this.body = { target: '/403.html', status: 'deny' };
    } else {
      this.realStatus = 200;
      this.redirect('/403.html');
    }
  };
};
