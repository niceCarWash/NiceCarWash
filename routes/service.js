const express = require('express');
const bodyParser = require('body-parser').json();
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require('../middlewares/auth');

// controller
const {
  create,
  list,
  update,
  remove,
  read,
} = require('../controllers/service');

// Features
router.post('/services/create', authCheck, adminCheck, create);
router.put('/services/:id/update', authCheck, adminCheck, update);
router.get('/services', list);
router.get('/services/:id/show', read);
router.delete('/services/:id/delete', authCheck, adminCheck, remove);
module.exports = router;
