'use strict';

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    locationId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    bookingDate: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(Location)
    Booking.belongsTo(User)
  };
  return Booking;
};