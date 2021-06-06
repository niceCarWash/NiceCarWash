const express = require('express');
const bodyParser = require('body-parser').json();
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require('../middlewares/auth');

// controller
const { create, list, update, remove, read } = require('../controllers/plan');

router.post('/plans/create', authCheck, adminCheck, create);
router.put('/plans/:id/update', authCheck, adminCheck, update);
router.get('/plans', list);
router.get('/plans/:id/show', read);
router.delete('/plans/:id/delete', authCheck, adminCheck, remove);

module.exports = router;
