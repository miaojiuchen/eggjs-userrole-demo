'use strict';

function delay(span) {
  return new Promise(resolve => {
    setTimeout(resolve, span);
  })
}

module.exports = app => {
  app.role.use('admin', async function () {
    await delay(2000); // fake query isAdmin
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
