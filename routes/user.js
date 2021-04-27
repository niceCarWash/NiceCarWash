const express = require('express');

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require('../middlewares/auth');

// controller
const { getUsers, createOrder, listOrder } = require('../controllers/users');

router.get('/users', getUsers);
router.get('/info', (req, res) => {
  res.send('The server is runnig and you hit the info end point');
});
router.post('/order', authCheck, createOrder);
router.get('/order/:id', listOrder);

module.exports = router;
