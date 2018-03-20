'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  username: {
    type: DataTypes.STRING,
    required: true,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    required: true
  }
    // NEED TO ADD
  // average_rating: {},
  // rating_count: {},
  // first_name: {},
  // last_name: {},
  // street: {},
  // state: {},
  // city: {},
  // zipcode: {},
});
  return User;
}