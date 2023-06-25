const express = require("express");
const router = express.Router();
const { addCompany, getCompany } = require("../controller/company-controller");

router.get("/", getCompany);
router.post("/", addCompany);

module.exports = router;
