const express = require("express");
const Company = require("../models/company.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const CompanyRegister = await Company.find().lean().exec();
    return res.status(200).send(CompanyRegister);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.post("", (req, res) => {
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

module.exports = router;
