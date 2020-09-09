const express = require("express");
const router = express.Router();
const CheckAuth = require("../checkAuth");

const HomeCTLS = require("../controllers/homeCTL");

router.get("/", HomeCTLS.home);
router.post("/", CheckAuth.checkAuth, HomeCTLS.homePOST);

module.exports = router;
