require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const Connection = require("./database/config");
const app = express();
const companyRoute = require("./routes/route");

PORT = 8181 || process.env.PORT;

Connection();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/company", companyRoute);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message: message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});
