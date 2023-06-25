const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
  name: {
    type: String,
    requird: true,
  },
  location: {
    type: String,
    requird: true,
  },
  description: {
    type: String,
    requird: true,
  },
});

const Company = mongoose.model("company-list", companySchema);

module.exports = Company;
