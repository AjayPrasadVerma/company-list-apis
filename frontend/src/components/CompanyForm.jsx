import classes from "./CompanyForm.module.css";

function CompanyForm({ method, event }) {
  const cancelHandler = () => {};

  const isSubmiitting = true;

  return (
    <div className={classes["form-container"]}>
      <div id={classes["sub-container"]}>
        <h1>Add Company</h1>
        <form action="/signup" method={method}>
          <div className={classes["c-info"]}>
            <label htmlFor="CompanyName">Company Name</label>
            <input
              type="text"
              name="CompanyName"
              required
              defaultValue={event ? event.name : ""}
            />
          </div>
          <div className={classes["c-info"]}>
            <label htmlFor="location">Location</label>
            <input
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompanyForm;
