const express = require("express");
const router = express.Router();

const controller = require('../controllers/schema.controller');

router.route("/").get(controller.connectionCheck);
router.route("/change-schema/:schemaName?").get(controller.cheangeSchemaName);



module.exports = router;