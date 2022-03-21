'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/statsController');

router.get('/', controller.get);

module.exports = router;
