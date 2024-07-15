/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const favoritesData = [
      {
        user_id: 1,
        card_id: 3,
      },
      {
        user_id: 2,
        card_id: 1,
      },
    ];
    const favorites = favoritesData.map((favorite) => ({
      ...favorite,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Favorites', favorites);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('Favorites');
  },
};
