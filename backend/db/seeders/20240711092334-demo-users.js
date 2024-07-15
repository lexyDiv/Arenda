/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    const usersData = [
      {
        name: 'Papa',
        password: '123',
        level: 99,
      },
      {
        name: 'Mama',
        password: '123',
        level: 1,
      },
    ];
    const users = usersData.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
