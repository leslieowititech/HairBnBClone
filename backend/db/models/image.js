'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    locationId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Location, {foreignKey: 'locationId'})
  };
  return Image;
};