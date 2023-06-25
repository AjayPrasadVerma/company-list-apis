const Company = require("../schema/company-schema");
const { isValidText } = require("../util/validation");

const addCompany = async (req, res, next) => {
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
    next(error);
  }
};

module.exports = addCompany;
