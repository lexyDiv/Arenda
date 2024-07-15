/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const cardsData = [
      {
        user_id: 1,
        image: 'https://a.d-cd.net/58634d9s-480.jpg',
        data: 'Жизнеутверждающая картинка !',
      },
      {
        user_id: 1,
        image: 'https://cdnstatic.rg.ru/uploads/images/2024/02/14/ik_34a.jpg',
        data: 'Крутой пейзаж !',
      },
      {
        user_id: 2,
        image: 'https://садсибниисхоза.рф/uploads/company/-244981931/3744/.tmb/800x800/Loh-serebristyj.jpg',
        data: 'Отличное растение !',
      },
    ];
    const cards = cardsData.map((card) => ({
      ...card,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Cards', cards);
  },

  async down(queryInterface) {
    queryInterface.bulkDelete('Cards');
  },
};
