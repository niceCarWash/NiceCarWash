const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
  create,
  read,
  update,
  remove,
  list,
} = require("../controllers/feature");

// routes
router.post("/feature", authCheck, adminCheck, create);
router.get("/features", list);
router.get("/feature/:slug", read);
router.put("/feature/:slug", authCheck, adminCheck, update);
router.delete("/feature/:slug", authCheck, adminCheck, remove);

module.exports = router;
