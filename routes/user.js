const express = require('express');

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require('../middlewares/auth');

// controller
const { getUsers } = require('../controllers/users');

router.post('/users', authCheck, adminCheck, getUsers);
router.get('/info', (req, res) => {
  res.send('The server is runnig and you hit the info end point');
});

module.exports = router;
