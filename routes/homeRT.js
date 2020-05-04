const express = require("express");
const router = express.Router();
const HomeCTLS = require("../controllers/homeCTL");

router.get("/", HomeCTLS.home);
router.post("/", HomeCTLS.homePOST);

module.exports = router;