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

const destroy = async (req, res) => {
  const { id } = req.params;
  await taskService.destroy(id);

  return res.status(204).json();
};

const update = async (req, res) => {
  const { id } = req.params;
  const { description, status } = req.body;
  const updatedItem = await taskService.update(description, status, id);

  return res.status(200).json(updatedItem);
};

module.exports = {
  getAll,
  create,
  destroy,
  update,
};
