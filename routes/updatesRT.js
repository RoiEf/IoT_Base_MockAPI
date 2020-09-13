const express = require("express");
const router = express.Router();
const CheckAuth = require("../checkAuth");

const UpdatesCTLS = require("../controllers/updatesCTL");

router.post("/firmware", CheckAuth.checkAuth, UpdatesCTLS.firmware);
router.post("/spa", CheckAuth.checkAuth, UpdatesCTLS.spa);
router.post("/password", CheckAuth.checkAuth, UpdatesCTLS.password);

module.exports = router;
