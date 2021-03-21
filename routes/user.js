const express = require('express');

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require('../middlewares/auth');

// controller
const { getUsers } = require('../controllers/users');

router.post('/users', authCheck, adminCheck, getUsers);

module.exports = router;
