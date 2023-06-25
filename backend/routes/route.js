const express = require("express");
const router = express.Router();
const addCompany = require("../controller/company-controller");

router.post("/", addCompany);

module.exports = router;
