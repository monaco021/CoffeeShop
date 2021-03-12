'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShoppingCart = sequelize.define('ShoppingCart', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  ShoppingCart.associate = function(models) {
    ShoppingCart.belongsTo(models.User, { foreignKey: "userId" });
    ShoppingCart.belongsTo(models.Product, {foreignKey: "productId"});
  };
  return ShoppingCart;
};