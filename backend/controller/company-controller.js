const Company = require("../schema/company-schema");
const { isValidText } = require("../util/validation");

const addCompany = async (req, res) => {
  const data = req.body;

  let errors = {};

  if (!isValidText(data.name)) {
    errors.title = "Invalid name.";
  }

  if (!isValidText(data.description)) {
    errors.description = "Invalid description.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "Adding the company failed due to validation errors.",
      errors,
    });
  }

  const newCompany = new Company(data);

  try {
    await newCompany.save();
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getCompany = async (req, res) => {
  try {
    const companyData = await Company.find({}, { about: 0 });
    res.status(200).json(companyData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { addCompany, getCompany };
