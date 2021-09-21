'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    locationId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: 'userId'})
    Review.belongsTo(models.Location, { foreignKey: 'locationId', onDelete: 'cascade', hooks: true })
  };
  return Review;
};