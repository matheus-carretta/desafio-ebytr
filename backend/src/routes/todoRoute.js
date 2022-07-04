const express = require('express');

const taskController = require('../controllers/taskController');

const taskRoute = express.Router();

taskRoute.put('/:id', (req, res) => res.send(req));

taskRoute.delete('/:id', (req, res) => res.send(req));

taskRoute.get('/', taskController.getAll);

taskRoute.post('/', (req, res) => res.send(req));

module.exports = taskRoute;
