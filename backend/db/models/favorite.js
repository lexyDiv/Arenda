const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Card }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Card, { foreignKey: 'card_id' });
    }
  }
  Favorite.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    card_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Cards',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
