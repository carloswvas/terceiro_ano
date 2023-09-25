const express = require("express");

const TaskController = require("../controllers/TaskController");

const routes = express.Router();

routes.post("/users", TaskController.store());

module.exports = routes;