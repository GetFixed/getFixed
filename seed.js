const path = require('path');
require('dotenv').config();
let seedData = require('./server/database/seedData');
let Sequelize = require('sequelize');
const config = require('./server/config.js');
const bCrypt = require('bcrypt-nodejs');

var generateHash = function (password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

let sequelize = new Sequelize(
  'get_fixed',
  config.MYSQL_USER,
  config.MYSQL_PASSWORD,
  {
    host: config.SQL_IP_ADDRESS,
    dialect: 'mysql',
    define: {
      underscored: true,
    },
  },
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// Models/tables
db.users = require('./server/models/users.js')(sequelize, Sequelize);
db.listings = require('./server/models/listings.js')(sequelize, Sequelize);

let casual = require('casual');

function createUsers(quantity) {
  const users = [];
  for (let i = 0; i <= quantity; i++) {
    const newEntry = {};
    newEntry.username = casual.username;
    newEntry.password = generateHash(123);
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
  'https://mobileimages.lowes.com/product/converted/693759/6937590200395.jpg',
];

const categories = [
  'electronics',
  'automotive',
  'handyman',
  'computers',
  'general labour',
  'specialty',
  'electrician',
  'free stuff',
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
  'Fullerton',
];

const coordinates = {
  'San Francisco': {
    type: 'Point',
    coordinates: [37.7749, -122.4194],
  },
  'Los Angeles': {
    type: 'Point',
    coordinates: [34.0522, -118.2437],
  },
  'Fullerton': {
    type: 'Point',
    coordinates: [33.8704, -117.9242],
  },
  'Pasadena': {
    type: 'Point',
    coordinates: [34.1478, -118.1445],
  },
  'Orange': {
    type: 'Point',
    coordinates: [33.7879, -117.8531],
  },
  'Torrance': {
    type: 'Point',
    coordinates: [33.8358, -118.3406],
  },
  'Escondido': {
    type: 'Point',
    coordinates: [33.1192, -117.0864],
  },
  'Sunnyvale': {
    type: 'Point',
    coordinates: [37.3688, -122.0363],
  },
  'Pomona': {
    type: 'Point',
    coordinates: [34.0551, -117.7500],
  },
  'Salinas': {
    type: 'Point',
    coordinates: [36.6777, -121.6555],
  },
  'Hayward': {
    type: 'Point',
    coordinates: [37.6688, -122.0808],
  },
  'Palmdale': {
    type: 'Point',
    coordinates: [34.5794, -118.1165],
  },
  'Lancaster': {
    type: 'Point',
    coordinates: [34.6868, -118.1542],
  },
  'Corona': {
    type: 'Point',
    coordinates: [33.8753, -117.5664],
  },
  'Elk Grove': {
    type: 'Point',
    coordinates: [38.4088, -121.3716],
  },
  'Ontario': {
    type: 'Point',
    coordinates: [34.0633, -117.6509],
  },
  'Santa Rosa': {
    type: 'Point',
    coordinates: [38.4404, -122.7141],
  },
  'Garden Grove': {
    type: 'Point',
    coordinates: [33.7743, -117.9380],
  },
  'Oceanside': {
    type: 'Point',
    coordinates: [33.1959, -117.3795],
  },
  'Santa Clarita': {
    type: 'Point',
    coordinates: [34.3917, -118.5426],
  },
  'Glendale': {
    type: 'Point',
    coordinates: [34.1425, -118.2551],
  },
  'Huntington Beach': {
    type: 'Point',
    coordinates: [33.6595, -117.9988],
  },
  'Moreno Valley': {
    type: 'Point',
    coordinates: [33.9425, -117.2297],
  },
  'Oxnard': {
    type: 'Point',
    coordinates: [34.1975, -119.1771],
  },
  'Fontana': {
    type: 'Point',
    coordinates: [34.0922, -117.4350],
  },
  'Modesto': {
    type: 'Point',
    coordinates: [37.6391, -120.9969],
  },
  'San Bernadino': {
    type: 'Point',
    coordinates: [34.1083, -117.2898],
  },
  'Fremont': {
    type: 'Point',
    coordinates: [37.5483, -121.9886],
  },
  'Chula Vista': {
    type: 'Point',
    coordinates: [32.6401, -117.0842],
  },
  'Stockton': {
    type: 'Point',
    coordinates: [37.9577, -121.2908],
  },
  'Santa Ana': {
    type: 'Point',
    coordinates: [33.7455, -117.8677],
  },
  'Anaheim': {
    type: 'Point',
    coordinates: [33.8366, -117.9143],
  },
  'Oakland': {
    type: 'Point',
    coordinates: [37.8044, -122.2711],
  },
  'Long Beach': {
    type: 'Point',
    coordinates: [33.7701, -118.1937],
  },
  'Fresno': {
    type: 'Point',
    coordinates: [36.7378, -119.7871],
  },
  'Venice': {
    type: 'Point',
    coordinates: [33.9850, -118.4695],
  },
  'Van Nuys': {
    type: 'Point',
    coordinates: [34.1899, -118.4514],
  },
  'Santa Monica': {
    type: 'Point',
    coordinates: [34.0195, -118.4912],
  },
  'Monterrey': {
    type: 'Point',
    coordinates: [36.6002, -121.8947],
  },
  'Santa Barbara': {
    type: 'Point',
    coordinates: [34.4208, -119.6982],
  },
  'Santa Cruz': {
    type: 'Point',
    coordinates: [36.9741, -122.0308],
  },
  'San Jose': {
    type: 'Point',
    coordinates: [37.3382, -121.8863],
  },
  'Bakersville': {
    type: 'Point',
    coordinates: [35.3733, -119.0187],
  },
  'Roseville': {
    type: 'Point',
    coordinates: [38.7521, -121.2880],
  },
  'Redlands': {
    type: 'Point',
    coordinates: [34.0556, -117.1825],
  },
  'Riverside': {
    type: 'Point',
    coordinates: [33.9806, -117.3755],
  },
  'Irvine': {
    type: 'Point',
    coordinates: [33.6846, -117.8265],
  },
  'San Diego': {
    type: 'Point',
    coordinates: [32.7157, -117.1611],
  },
  'Eureka': {
    type: 'Point',
    coordinates: [40.8021, -124.1637],
  },
  'Sacramento': {
    type: 'Point',
    coordinates: [38.5816, -121.4944],
  },
}

function createListing(userID) {
  // let listings = [];
  // for (var i = 0; i <= quantity; i++) {
  let problem = seedData.listings[Math.floor((Math.random() * seedData.listings.length))];
  let newEntry = {};
  newEntry.user_id = userID;
  newEntry.title = problem.title;
  newEntry.description = problem.description;
  newEntry.category = problem.category;
  newEntry.location = cities[Math.floor(Math.random() * 51)];
  newEntry.image = problem.image;
  newEntry.point = coordinates[newEntry.location];
  newEntry.latitude = coordinates[newEntry.location].coordinates[0];
  newEntry.longitude = coordinates[newEntry.location].coordinates[1];
  listings.push(newEntry);
  // }
  return newEntry;
}

const users = createUsers(15);
let listings = [];

users.forEach((user) => {
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
    // .then(function() {
    //   console.log(listings[0].point);
    // })
    .then(function() {
      sequelize.close();
    })
    .catch(function(err) {
      console.error(err);
      sequelize.close();
    });
});


console.log(seedData.listings.length)
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
