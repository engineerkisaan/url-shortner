const express = require("express");
const Router = express.Router();
const urlController = require('../controllers/url')

Router.post("/toShort", urlController.toShort);

module.exports = Router;
