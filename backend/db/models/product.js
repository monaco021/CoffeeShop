'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    brandName: DataTypes.STRING,
    roast: DataTypes.STRING,
    price: DataTypes.INTEGER,
    imageLink: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};