const express = require("express");
const router = express.Router();
const CheckAuth = require("../checkAuth");

const BasicCTLS = require("../controllers/basicCTL");

router.post("/", CheckAuth.checkAuth, BasicCTLS.basic);

module.exports = router;
