'use strict'

const routes = [
  require('./routes/users.js')
];


module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};