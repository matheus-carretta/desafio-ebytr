const express = require('express');

const taskController = require('../controllers/taskController');

const taskRoute = express.Router();

taskRoute.put('/:id', (req, res) => res.send(req));

taskRoute.delete('/:id', taskController.destroy);

taskRoute.get('/', taskController.getAll);

taskRoute.post('/', taskController.create);

module.exports = taskRoute;
