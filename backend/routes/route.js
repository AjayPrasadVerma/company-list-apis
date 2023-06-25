const express = require("express");
const router = express.Router();
const {
  addCompany,
  getCompanies,
  getCompany,
} = require("../controller/company-controller");

router.get("/", getCompanies);

router.post("/", addCompany);

router.get("/:id", getCompany);

module.exports = router;
