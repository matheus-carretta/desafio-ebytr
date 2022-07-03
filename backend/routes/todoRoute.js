const express = require('express');

const todoRoute = express.Router();

todoRoute.put('/:id', (req, res) => res.send(req));

todoRoute.delete('/:id', (req, res) => res.send(req));

todoRoute.get('/', (req, res) => res.send(req));

todoRoute.post('/', (req, res) => res.send(req));

module.exports = todoRoute;
