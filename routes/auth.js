const express = require('express');

const router = express.Router();

// middlewares
const { authCheck } = require('../middlewares/auth');

// controller
const {
  createUser,
  currentUser,
  updateUser,
  deleteUser,
} = require('../controllers/auth');

router.post('/create-user', authCheck, createUser);
router.put('./update-user/:_id', authCheck, updateUser);
router.post('/current-user', authCheck, currentUser);
router.delete('/delete-user/:_id', deleteUser);

module.exports = router;
