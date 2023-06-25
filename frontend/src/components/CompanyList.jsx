import { Link } from "react-router-dom";
import classes from "./CompanyList.module.css";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const CompanyList = ({ conpamyList }) => {
  return (
    <Table className={classes.table}>
      <TableHead className={classes.thead}>
        <TableRow>
          <TableCell className={classes["t-row"]}>S No.</TableCell>
          <TableCell className={classes["t-row"]}>Name</TableCell>
          <TableCell className={classes["t-row"]}>Location</TableCell>
          <TableCell className={classes["t-row"]}></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>ABC Corporation</TableCell>
          <TableCell>Location</TableCell>
          <TableCell>
            <Button
              variant="contained"
              color="warning"
              style={{ marginRight: 10 }}
              component={Link}
              to={`/edit/`}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              style={{ marginRight: 10 }}
              color="error"
            >
              Delete
            </Button>
            <Button variant="contained" color="success">
              View
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CompanyList;
