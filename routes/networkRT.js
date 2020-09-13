const express = require("express");
const router = express.Router();
const CheckAuth = require("../checkAuth");

const NetworkCTLS = require("../controllers/networkCTL");

router.post("/", CheckAuth.checkAuth, NetworkCTLS.network);

module.exports = router;
