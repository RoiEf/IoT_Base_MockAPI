const express = require("express");
const router = express.Router();
const NetworkCTLS = require("../controllers/networkCTL");

router.post("/", NetworkCTLS.network);

module.exports = router;
