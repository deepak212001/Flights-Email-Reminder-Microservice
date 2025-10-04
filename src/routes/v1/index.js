const express = require("express");
const { InfoController, EmailController } = require("../../controllers");

const router = express.Router();

// router.get("/info", info);
router.get("/info", InfoController.info);
router.post('/tickets', EmailController.create);

module.exports = router;
