
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
db.users = require('../models/users.js')(sequelize, Sequelize);
db.listings = require('../models/listings.js')(sequelize, Sequelize);

// we define the models we need using js--we don't need a schema file!
// var User = db.define('Users', {
//   id: {
//     type: Sequelize.UUID,
//     primaryKey: true,
//     defaultValue: Sequelize.UUIDV4
//   },
//   username: {
//     type: Sequelize.STRING,
//     required: true,
//     unique: true
//   },
//   email: {
//     type: Sequelize.STRING,
//     unique: true
//   },
//   password: {
//     type: Sequelize.STRING,
//     required: true
//   }
//     // NEED TO ADD
//   // average_rating: {},
//   // rating_count: {},
//   // first_name: {},
//   // last_name: {},
//   // street: {},
//   // state: {},
//   // city: {},
//   // zipcode: {},
// });

// var Listing = db.define('Listing', {
//   id: {
//     type: Sequelize.UUID,
//     primaryKey: true,
//     defaultValue: Sequelize.UUIDV4
//   },
//   text: Sequelize.STRING,
//   roomname: Sequelize.STRING
// });


module.exports = db;
