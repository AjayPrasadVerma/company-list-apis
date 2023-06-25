import { Link } from "react-router-dom";
import classes from "./CompanyDetails.module.css";
import { Button } from "@mui/material";

const CompanyDetails = ({ companyDetails }) => {
  return (
    <div className={classes.container}>
      <h1>{companyDetails.name}</h1>
      <h3>{companyDetails.location}</h3>
      <p>{companyDetails.about}</p>
      <Button
        variant="contained"
        color="warning"
        style={{ marginRight: 10 }}
        component={Link}
        to={"edit"}
      >
        Edit
      </Button>
      <Button variant="contained" style={{ marginRight: 10 }} color="error">
        Delete
      </Button>
    </div>
  );
};

export default CompanyDetails;
