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
    lng: DataTypes.DECIMAL,
    capacity: DataTypes.INTEGER,
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
    Location.belongsTo(models.User, { foreignKey: 'userId'})
    Location.hasMany(models.Booking, { foreignKey: 'locationId', onDelete: 'CASCADE', hooks: true })
    Location.hasMany(models.Image, { foreignKey: 'locationId', onDelete: 'CASCADE', hooks: true })
    Location.hasMany(models.Review, { foreignKey: 'locationId', onDelete: 'CASCADE', hooks: true })
  };
  return Location;
};