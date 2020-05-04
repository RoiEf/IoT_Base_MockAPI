const express = require("express");
const router = express.Router();
const UpdatesCTLS = require("../controllers/updatesCTL");

router.post("/firmware", UpdatesCTLS.firmware);
router.post("/spa", UpdatesCTLS.spa);
router.post("/password", UpdatesCTLS.password);

module.exports = router;