'use strict';

module.exports = app => {

  app.get('/', 'home.index');

  app.post('/account/login', 'account.loginPost');
  app.get('/login.html', 'account.login');

  app.get('/404.html', 'error.404');
  app.get('/403.html', 'error.403');
  app.get('/500.html', 'error.500');

  const needAdmin = app.role.can('admin');
  app.get('/admin.html', needAdmin, 'admin.index');
  
};
