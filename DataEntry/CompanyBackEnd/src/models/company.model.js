const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    cname: { type: String, required: true },
    adrs: { type: String, required: true },
    web: { type: String, required: true },
    features: { type: {}, default: [], required: false },
    subfeatures: { type: [String], default: [], required: false },
    addinput: { type: String, default: [], required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


module.exports = new mongoose.model("company", companySchema);

