'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    brandName: DataTypes.STRING,
    roast: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    imageLink: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {});
  Product.associate = function(models) {
    const columnMapping2 = {
      through: 'ShoppingCart',
      otherKey: 'userId',
      foreignKey: 'productId',
    }

    Product.belongsToMany(models.User, columnMapping2);
    Product.hasMany(models.Review, {foreignKey: "productId"});
  };
  return Product;
};