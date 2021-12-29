const express = require("express");
const router = require("./persons.js");
const app = express();

app.use(express.json());
app.use("/api/persons", router);
module.exports = app;
