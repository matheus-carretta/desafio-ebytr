module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define(
    'Status',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
    },
  );

  Status.associate = (models) => {
    Status.hasOne(
      models.Task,
      { foreignKey: 'statusId', as: 'tasks' },
    );
  };

  return Status;
};
