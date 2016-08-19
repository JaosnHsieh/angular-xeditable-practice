var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'a-table'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root:0000@localhost:3306/documents'
  },

  test: {
    root: rootPath,
    app: {
      name: 'a-table'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root:0000@localhost:3306/documents'
  },

  production: {
    root: rootPath,
    app: {
      name: 'a-table'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root:0000@localhost:3306/documents'
  }
};

module.exports = config[env];
