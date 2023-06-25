import {
  Form,
  useNavigation,
  useNavigate,
  json,
  redirect,
} from "react-router-dom";
import classes from "./CompanyForm.module.css";

function CompanyForm({ method, companyData }) {
  const navigation = useNavigation();
  const navigate = useNavigate();

  const cancelHandler = () => {
    navigate("..");
  };

  const isSubmiitting = navigation.state === "submitting";

  return (
    <div className={classes["form-container"]}>
      <div id={classes["sub-container"]}>
        <h1>Add Company</h1>
        <Form method={method}>
          <div className={classes["c-info"]}>
            <label htmlFor="companyName">Company Name</label>
            <input
              id="companyName"
              type="text"
              name="companyName"
              required
              defaultValue={companyData ? companyData.name : ""}
            />
          </div>
          <div className={classes["c-info"]}>
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              name="location"
              required
              defaultValue={companyData ? companyData.location : ""}
            />
          </div>

          <div className={classes["c-info"]}>
            <label htmlFor="about">About</label>
            <textarea
              id="about"
              name="about"
              rows="5"
              required
              defaultValue={companyData ? companyData.about : ""}
            />
          </div>
          <div className={classes.actions}>
            <button
              type="button"
              onClick={cancelHandler}
              disabled={isSubmiitting}
            >
              Cancel
            </button>
            <button disabled={isSubmiitting}>
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
