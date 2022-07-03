const TodoModel = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });

  return Todo;
};

module.exports = TodoModel;
