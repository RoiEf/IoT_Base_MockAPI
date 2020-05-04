const express = require("express");
const router = express.Router();
const LoginCTLS = require("../controllers/loginCTL");

router.post("/", LoginCTLS.login);

module.exports = router;