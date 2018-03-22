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
  },
  avg_rating: DataTypes.STRING,
  rating_count: DataTypes.INTEGER,
  city: DataTypes.STRING,
  phone_number: DataTypes.STRING,
  num: DataTypes.STRING
  // first_name: {},
  // last_name: {},
  // street: {},
  // state: {},

  // zipcode: {},
});
  return User;
}