import { Link } from "react-router-dom";
import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 20px auto;
`;

const THead = styled(TableRow)`
  background: #000000;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;

const TBody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

const CompanyList = ({ conpamyList }) => {
  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Name</TableCell>
          <TableCell>Location</TableCell>
          <TableCell>S No.</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {conpamyList.map((company, index) => (
          <TBody key={company._id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{company.name}</TableCell>
            <TableCell>{company.location}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="warning"
                style={{ marginRight: 10 }}
                component={Link}
                to={"edit"}
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
              <Button
                variant="contained"
                color="success"
                component={Link}
                to={`/company/${company._id}`}
              >
                View
              </Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default CompanyList;
