const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ User, Favorite }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Favorite, { foreignKey: 'card_id' });
    }
  }
  Card.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    image: {
      type: DataTypes.TEXT,
    },
    data: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
