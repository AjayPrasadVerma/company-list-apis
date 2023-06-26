import {
  Form,
  useNavigation,
  useNavigate,
  json,
  redirect,
} from "react-router-dom";
import classes from "./CompanyForm.module.css";
import useInput from "../hooks/use-input";

function CompanyForm({ method, companyData, heading }) {
  const inputValidate = (value) => value.trim() !== "";

  const navigation = useNavigation();
  const navigate = useNavigate();

  const cancelHandler = () => {
    navigate("..");
  };

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(inputValidate);

  const {
    value: enteredLocation,
    isValid: enteredLocationIsValid,
    hasError: locationInputHasError,
    inputChangeHandler: locationChangeHandler,
    inputBlurHandler: locationBlurHandler,
  } = useInput(inputValidate);

  const {
    value: enteredAbout,
    isValid: enteredAboutIsValid,
    hasError: aboutInputHasError,
    inputChangeHandler: aboutChangeHandler,
    inputBlurHandler: aboutBlurHandler,
  } = useInput(inputValidate);

  let formIsValid = false;
  if (enteredNameIsValid && enteredLocationIsValid && enteredAboutIsValid) {
    formIsValid = true;
  }

  const enteredCompanyName = nameInputHasError
    ? classes.invalid
    : classes["form-control"];

  const enteredCompanyLocation = locationInputHasError
    ? classes.invalid
    : classes["form-control"];

  const enteredCompanyAbout = aboutInputHasError
    ? classes.invalid
    : classes["form-control"];

  const isSubmiitting = navigation.state === "submitting";

  return (
    <div className={classes["form-container"]}>
      <div id={classes["sub-container"]}>
        <h1>{heading}</h1>
        <Form method={method}>
          <div className={enteredCompanyName}>
            <label htmlFor="companyName">Company Name</label>
            <input
              id="companyName"
              type="text"
              name="companyName"
              onBlur={nameBlurHandler}
              onChange={nameChangeHandler}
              value={enteredName}
              defaultValue={companyData ? companyData.name : ""}
            />
            {nameInputHasError ? (
              <p className={classes["error-text"]}>
                Please enter company name.
              </p>
            ) : (
              ""
            )}
          </div>
          <div className={enteredCompanyLocation}>
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              name="location"
              value={enteredLocation}
              onChange={locationChangeHandler}
              onBlur={locationBlurHandler}
              defaultValue={companyData ? companyData.location : ""}
            />
            {locationInputHasError ? (
              <p className={classes["error-text"]}>
                Please enter company location.
              </p>
            ) : (
              ""
            )}
          </div>

          <div className={enteredCompanyAbout}>
            <label htmlFor="about">About</label>
            <textarea
              id="about"
              name="about"
              rows="5"
              value={enteredAbout}
              onChange={aboutChangeHandler}
              onBlur={aboutBlurHandler}
              defaultValue={companyData ? companyData.about : ""}
            />
            {aboutInputHasError ? (
              <p className={classes["error-text"]}>
                Please enter About the company.
              </p>
            ) : (
              ""
            )}
          </div>
          <div className={classes.actions}>
            <button
              type="button"
              onClick={cancelHandler}
              disabled={isSubmiitting}
            >
              Cancel
            </button>
            <button
              className={classes.saveBtn}
              disabled={isSubmiitting || !formIsValid}
            >
              {isSubmiitting ? "Submitting..." : "Save"}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

/**
 * @description
 * making the API request to add new company and edit company details
 */

export const action = async ({ request, params }) => {
  const method = request.method;
  const data = await request.formData();

  const companyData = {
    name: data.get("companyName"),
    location: data.get("location"),
    about: data.get("about"),
  };

  let url = "http://localhost:8181/company";

  if (method === "PUT") {
    const id = params.companyId;
    url = "http://localhost:8181/company/" + id;
  }

  try {
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify(companyData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 422) {
      return response;
    }

    if (!response.ok) {
      throw json({ message: "Could not save company." }, { status: 500 });
    }

    return redirect("/company");
  } catch (error) {
    console.log(error);
  }
};

export default CompanyForm;
