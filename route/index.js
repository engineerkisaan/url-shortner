const express = require("express");
const Router = express.Router();
const indexController = require('../controllers/index')

Router.get("/:urlCode", indexController.accessShortUrl);

module.exports = Router;
