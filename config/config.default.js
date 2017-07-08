'use strict';

const path = require('path');

module.exports = appInfo => {
  const { pkg, name, baseDir, HOME, root } = appInfo;

  const config = {};

  config.keys = 'xxx';

  config.onerror = {
    errorPageUrl: '/500.html',
  };

  config.view = {
    root: path.join(baseDir, 'app/view'),
    defaultExtension: '.nj',
    mapping: {
      '.nj': 'nunjucks',
    },
  };

  config.notfound = {
    pageUrl: '/404.html',
  };

  config.middleware = [
    
  ];

  /**
   * 可以把session放在redis里，取消下面的注释即可自动将session保存到redis里
   */ 
  // config.redis = {
  //   clients: {
  //     session: {
  //       port: 6379,
  //       host: '127.0.0.1',
  //       password: '',
  //       db: 0,
  //     },
  //     cache: {
  //       port: 6379,
  //       host: '127.0.0.1',
  //       password: '',
  //       db: 0,
  //     },
  //   },
  // };

  // config.session = {
  //   key: 'dsf_session',
  // };

  // config.sessionRedis = {
  //   name: 'session',
  // };

  // 指定controller拿到user的方式
  config.userservice = {
    service: {
      * getUser(ctx) {
        if (!ctx.session.user) {
          return null;
        }
        const { userId, userName, isAdmin } = ctx.session.user;
        return { userId, userName, isAdmin };
      },
      getUserId(ctx) {
        return ctx.user && ctx.user.userId;
      }
    }
  }

  return config;
};
