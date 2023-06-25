import { Form, useNavigation, json, redirect } from "react-router-dom";
import classes from "./CompanyForm.module.css";

function CompanyForm({ method, event }) {
  const navigation = useNavigation();

  const cancelHandler = () => {};

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
              defaultValue={event ? event.name : ""}
            />
          </div>
          <div className={classes["c-info"]}>
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              name="location"
              required
              defaultValue={event ? event.location : ""}
            />
          </div>

          <div className={classes["c-info"]}>
            <label htmlFor="about">Description</label>
            <textarea
              id="description"
              name="description"
              rows="5"
              required
              defaultValue={event ? event.description : ""}
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
 * making the API request to add company and edit company details
 */

export const action = async ({ request, params }) => {
  const method = request.method;
  const data = await request.formData();

  const companyData = {
    name: data.get("companyName"),
    location: data.get("location"),
    description: data.get("description"),
  };

  let url = "http://localhost:8181/company";

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
