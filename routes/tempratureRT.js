const express = require("express");
const router = express.Router();

const TempratureCTLS = require("../controllers/tempratureCTL");

router.get("/", TempratureCTLS.temprature);

module.exports = router;
