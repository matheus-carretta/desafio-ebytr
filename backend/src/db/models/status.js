const StatusModel = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
  });

  return Status;
};

module.exports = StatusModel;
