const { Task, Status } = require('../db/models');

const getAll = async () => {
  const response = await Task.findAll({
    include: [{
      model: Status, as: 'statuses',
    }],
  });

  return response;
};

const create = async (description, statusId) => {
  const response = await Task.create({ description, statusId });

  return response;
};

module.exports = {
  getAll,
  create,
};
