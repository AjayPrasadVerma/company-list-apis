const express = require("express");
const router = express.Router();
const {
  addCompany,
  getCompanies,
  getCompany,
  updateCompany,
  deleteCompany,
} = require("../controller/company-controller");

router.get("/", getCompanies);

router.post("/", addCompany);

router.get("/:id", getCompany);

router.put("/:id", updateCompany);

router.delete("/:id", deleteCompany);

module.exports = router;
