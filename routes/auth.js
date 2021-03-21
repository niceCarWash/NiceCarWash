const express = require('express');

const router = express.Router();

// middlewares
const { authCheck } = require('../middlewares/auth');

// controller
const {
  createOrUpdateUser,
  currentUser,
  deleteUser,
} = require('../controllers/auth');

router.post('/create-user', authCheck, createOrUpdateUser);
router.put('./update-user/:_id', authCheck, createOrUpdateUser);
router.post('/current-user', authCheck, currentUser);
router.delete('/delete-user/:_id', deleteUser);

module.exports = router;
