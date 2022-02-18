"use strict";

const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.post("/", controller.post);
router.get("/", controller.get);
router.get("/:id", controller.getById);
router.put("/:id", controller.put);

module.exports = router;
