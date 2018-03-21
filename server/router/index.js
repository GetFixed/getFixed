'use strict'

const routes = [
  require('./routes/users.js'),
  require('./routes/listings.js')
];


module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};