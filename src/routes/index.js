const user = require('./user.router');
const express = require('express');
const router = express.Router();

router.use(user)

module.exports = router;