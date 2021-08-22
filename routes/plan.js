const express = require("express");
const bodyParser = require("body-parser").json();
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
  create,
  listAll,
  update,
  remove,
  read,
} = require("../controllers/plan");

router.post("/plan", authCheck, adminCheck, create);
router.put("/plan/:slug", authCheck, adminCheck, update);
router.get("/plans", listAll);
router.get("/plan/:slug", read);
router.delete("/plan/:slug", authCheck, adminCheck, remove);

module.exports = router;
