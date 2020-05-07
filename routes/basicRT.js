const express = require("express");
const router = express.Router();
const BasicCTLS = require("../controllers/basicCTL");

router.post("/", BasicCTLS.basic);

module.exports = router;
