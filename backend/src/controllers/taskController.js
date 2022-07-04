const taskService = require('../services/taskService');

const getAll = async (_req, res) => {
  const result = await taskService.getAll();

  return res.status(200).json(result);
};

const create = async (req, res) => {
  const { description, status } = req.body;
  const response = await taskService.create(description, status);

  return res.status(201).json(response);
};

module.exports = {
  getAll,
  create,
};
