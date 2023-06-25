const Company = require("../schema/company-schema");
const { isValidText } = require("../util/validation");

const addCompany = async (req, res) => {
  const data = req.body;

  let errors = {};

  if (!isValidText(data.name)) {
    errors.title = "Invalid name.";
  }

  if (!isValidText(data.about)) {
    errors.about = "Invalid description.";
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

const getCompanies = async (req, res) => {
  try {
    const companyData = await Company.find({}, { about: 0 });
    res.status(200).json(companyData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getCompany = async (req, res) => {
  try {
    const companyData = await Company.findOne({ _id: req.params.id });
    res.status(200).json(companyData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateCompany = async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedCompany);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { addCompany, getCompanies, getCompany, updateCompany };
