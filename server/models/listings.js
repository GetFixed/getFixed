'use strict'

module.exports = (sequelize, DataTypes) => {
  var Listing = sequelize.define('Listing', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  user_id: DataTypes.STRING,
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  category: DataTypes.STRING,
  location: DataTypes.STRING
  });
return Listing
}