import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const Company = require("../models/company.model");

app.post("/save", (req, res) => {
  const { cname, adrs, web, features, subfeatures, addinput } = req.body;
  Company.findOne({ cname: cname }, (err, company) => {
    if (company) {
      res.send({ message: "Company already exist..." });
    } else {
      const company = new Company({
        cname,
        adrs,
        web,
        features,
        subfeatures,
        addinput,
      });
      company.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully added" });
        }
      });
    }
  });
});

module.exports = app;
