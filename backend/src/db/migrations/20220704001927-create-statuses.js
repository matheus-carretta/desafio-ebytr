module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('statuses', {
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
