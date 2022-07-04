module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('Statuses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('Statuses'),
};
