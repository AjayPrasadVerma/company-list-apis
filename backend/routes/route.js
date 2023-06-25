const express = require("express");
const router = express.Router();
const {
  addCompany,
  getCompanies,
  getCompany,
  updateCompany,
} = require("../controller/company-controller");

router.get("/", getCompanies);

router.post("/", addCompany);

router.get("/:id", getCompany);

router.put("/:id", updateCompany);

module.exports = router;
