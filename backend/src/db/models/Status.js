module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define(
    'Status',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
    },
    {
      tablename: 'Status',
      timestamps: false,
      underscored: true,
    },
  );

  Status.associate = (models) => {
    Status.hasMany(
      models.Task,
      { foreignKey: 'statusId', as: 'Tasks' },
    );
  };

  return Status;
};
