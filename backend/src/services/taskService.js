const { Task, Status } = require('../db/models');

const getAll = async () => {
  const response = await Task.findAll({
    include: [{
      model: Status, as: 'statuses',
    }],
  });

  return response;
};

module.exports = {
  getAll,
};
