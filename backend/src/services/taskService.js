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

const destroy = async (id) => {
  const response = await Task.destroy({ where: { id } });

  return response;
};

const update = async (description, status, id) => {
  const response = await Task.update({ description, status }, { where: { id } });

  return response;
};

module.exports = {
  getAll,
  create,
  destroy,
  update,
};
