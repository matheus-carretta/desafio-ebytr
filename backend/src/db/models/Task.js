module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    'Task',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      description: DataTypes.STRING,
      statusId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      tablename: 'Task',
      timestamps: false,
      underscored: true,
    },
  );

  Task.associate = (models) => {
    Task.belongsTo(
      models.Status,
      { foreignKey: 'statusId', as: 'statuses' },
    );
  };

  return Task;
};
