const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Card, Favorite }) {
      this.hasMany(Card, { foreignKey: 'user_id' });
      this.hasMany(Favorite, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    level: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
