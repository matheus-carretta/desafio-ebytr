module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('tasks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    statusId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'status_id',
      references: {
        model: 'statuses',
        key: 'id',
      },
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('Tasks'),
};
