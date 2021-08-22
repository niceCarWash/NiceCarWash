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
} = require("../controllers/service");

// Features
router.post("/service", authCheck, adminCheck, create);
router.put("/service/:slug", authCheck, adminCheck, update);
router.get("/services", listAll);
router.get("/service/:slug", read);
router.delete("/service/:slug", authCheck, adminCheck, remove);
module.exports = router;
