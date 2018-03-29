const path = require('path');
require('dotenv').config();
var seedData = require('./server/database/seedData');
var Sequelize = require("sequelize");
const config = require("./server/config.js");
var sequelize = new Sequelize(
  "get_fixed",
  config.MYSQL_USER,
  config.MYSQL_PASSWORD,
  {
    host: config.SQL_IP_ADDRESS,
    dialect: "mysql",
    define: {
      underscored: true
    }
  }
);
let db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//Models/tables
db.users = require('./server/models/users.js')(sequelize, Sequelize);
db.listings = require('./server/models/listings.js')(sequelize, Sequelize);

var casual = require('casual');
function createUsers(quantity) {
  let users = [];
  for (var i = 0; i <= quantity; i++) {
    let newEntry = {};
    newEntry.username = casual.username;
    newEntry.password = casual.password;
    newEntry.email = casual.email;
    newEntry.avg_rating = (Math.floor(Math.random() * 51) / 10).toString();
    newEntry.rating_count = casual.integer(from = 0, to = 100);
    newEntry.city = cities[Math.floor(Math.random() * 51)];
    newEntry.phone_number = casual.phone;
    users.push(newEntry);
  }
  return users;
}

const images = [
  'https://i.ytimg.com/vi/_10j1Xvl_wY/hqdefault.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/41QTVzKddGL._US500_.jpg',
  'https://ae01.alicdn.com/kf/HTB1Jf1WklDH8KJjSspnq6zNAVXaG/Leicozic-Vi12-Professional-sound-mixer-12-channel-mixing-console-stage-church-mixer-de-audio-digital-recording.jpg_640x640.jpg',
  'https://fthmb.tqn.com/224yIyX6TLrll6puKQHXfH5pFnY=/960x0/filters:no_upscale()/closed-door-of-a-garage-121527652-588bd1fe5f9b5874eebc8919.jpg',
  'https://www.gardenzeus.com/wp-content/uploads/GZctorange-2.jpg',
  'https://d32c3oe4bky4k6.cloudfront.net/articles-videos/-/media/uscamediasite/images/story-images/2018/01/muscle-cars-scottsdale(10).ashx?modified=20180123160002&mw=1000&hash=F2EFE73081A00B6B316AA8663B84A77765E50181',
  'https://cmeimg-a.akamaihd.net/640/photos.demandstudios.com/getty/article/41/246/84869831.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxYDDNE7-lXvMuHLo4lB_h49v6GQBJwr2zhBhKFREtxeyzB597lA',
  'https://www.brainline.org/sites/default/files/styles/full_view_image/public/migrated//IMG_2553.jpg?itok=Dbht9Iwj',
  'https://i.pinimg.com/736x/e5/52/ef/e552ef43b440f1374f196da4f26fc5b1--optical-eyewear-nerd-girls.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4K6AhmquePXtXxXUXO18uPi9YVuDNFdse-ZKkCboYW2s9BFJaQ',
  'https://mobileimages.lowes.com/product/converted/693759/6937590200395.jpg'
]
const categories = [
  'electronics',
  'automotive',
  'handyman',
  'computers',
  'general labour',
  'specialty',
  'electrician',
  'free stuff'
];

const cities = [
  'San Francisco',
  'Los Angeles',
  'Sacramento',
  'Eureka',
  'San Diego',
  'Irvine',
  'Riverside',
  'Redlands',
  'Roseville',
  'Bakersville',
  'San Jose',
  'Santa Cruz',
  'Santa Barbara',
  'Monterrey',
  'Santa Monica',
  'Van Nuys',
  'Venice',
  'Fresno',
  'Long Beach',
  'Oakland',
  'Anaheim',
  'Santa Ana',
  'Stockton',
  'Chula Vista',
  'Fremont',
  'San Bernadino',
  'Modesto',
  'Fontana',
  'Oxnard',
  'Moreno Valley',
  'Huntington Beach',
  'Glendale',
  'Santa Clarita',
  'Oceanside',
  'Garden Grove',
  'Santa Rosa',
  'Ontario',
  'Elk Grove',
  'Corona',
  'Lancaster',
  'Palmdale',
  'Hayward',
  'Salinas',
  'Pomona',
  'Sunnyvale',
  'Escondido',
  'Torrance',
  'Pasadena',
  'Orange',
  'Fullerton'
]

function createListing(userID) {
  // let listings = [];
  // for (var i = 0; i <= quantity; i++) {
    let newEntry = {};
    newEntry.user_id = userID;
    newEntry.title = casual.short_description;
    newEntry.description = casual.short_description;
    newEntry.category = categories[Math.floor((Math.random() * 9))];
    newEntry.location = cities[Math.floor(Math.random() * 51)];
    newEntry.image = images[Math.floor((Math.random() * 12))];
    listings.push(newEntry);
  //}
  return newEntry;
}

let users = createUsers(15);
let listings = [];

users.forEach(function(user) {
  db.sequelize.sync({force:true})
    .then(function() {
      return db.users.create(user);
    })
    .then(function(user) {
      let newListing = createListing(user.id);
      return db.listings.create(newListing);
    })
    .then(function(listing) {
      let newListing = createListing(listing.user_id);
      return db.listings.create(newListing);
    })
    .then(function(listing) {
      let newListing = createListing(listing.user_id);
      return db.listings.create(newListing);
    })
    .then(function() {
      console.log(listings);
    })
    .then(function() {
      sequelize.close();
    })
    .catch(function(err) {
      console.error(err);
      sequelize.close();
    });
});

// listings.forEach(function(listing) {
//   db.sequelize.sync({force:true})
//     .then(function() {
//       console.log(listings);
//       return db.listings.create(listing);
//     })
//     .then(function() {
//       sequelize.close();
//     })
//     .catch(function(err) {
//       console.error(err);
//       sequelize.close();
//     });
// });

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