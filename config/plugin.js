'use strict';

/**
 * 把Session放在redis里时取消下面两个plugin的注释
 */

// exports.redis = {
//   enable: true,
//   package: 'egg-redis',
// };

// exports.sessionRedis = {
//   enable: true,
//   package: 'egg-session-redis',
// };

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.userservice = {
  enable: true,
  package: 'egg-userservice',
};

exports.userrole = {
  enable: true,
  package: 'egg-userrole',
};
