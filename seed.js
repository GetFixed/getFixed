const path = require('path');
require('dotenv').config();
var seedData = require('./server/database/seedData');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('getfixed', 'root', process.env.MONGO_PASSWORD, {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  define: {
    underscored: true
  }
});
let db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables

db.users = require('./server/models/users.js')(sequelize, Sequelize);
db.listings = require('./server/models/listings.js')(sequelize, Sequelize);

seedData.users.forEach(function(user) {
  db.sequelize.sync({force:true})
    .then(function() {
      return db.users.create(user);
    })
    .then(function() {
      sequelize.close();
    })
    .catch(function(err) {
      console.error(err);
      sequelize.close();
    });
});

seedData.listings.forEach(function(listing) {
  db.sequelize.sync({force:true})
    .then(function() {
      return db.listings.create(listing);
    })
    .then(function() {
      sequelize.close();
    })
    .catch(function(err) {
      console.error(err);
      sequelize.close();
    });
});


// db.sequelize.sync({force: true})
//   .then(function() {
//     // Now instantiate an object and save it:
//     return db.users.create({username: 'Gkolb', password: '123', email: 'gkolb@yahoo.com'});
//   })
//   .then(function() {
//     // Retrieve objects from the database:
//     return db.users.findAll({ where: {username: 'Gkolb'} });
//   })
//   .then(function(users) {
//     console.log(users[0].id, 'user[0]')
//     return db.listings.create({
//       user_id: users[0].id,
//       title: 'Broken Car',
//       description: 'My car is broken halp me',
//       category: 'Automotive',
//       location: 'Denver'
//     })
//   })
//   .then(function() {
//     sequelize.close();
//   })
//   .catch(function(err) {
//     // Handle any error in the chain\
//     console.error(err);
//     sequelize.close();
//   });
