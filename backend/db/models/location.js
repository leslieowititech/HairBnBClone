'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
    Location.hasMany(User, {foreignKey: 'userId'})
  };
  return Location;
};