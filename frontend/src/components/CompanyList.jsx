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
  margin: 20px auto 20px auto;
  background: #0000008f;
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
    color: white;
  }
`;

const CompanyList = ({ conpamyList }) => {
  return (
    <>
      {conpamyList.length !== 0 && (
        <StyledTable>
          <TableHead>
            <THead>
              <TableCell>S No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
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
      )}
    </>
  );
};

export default CompanyList;
