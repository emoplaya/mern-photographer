const mongoose = require("mongoose");

const URL = "mongodb://admin:KNt9%25hsI@oyoliyil.beget.app/admin";

const connectToDb = async () => {
  await mongoose.connect(URL).then(() => console.log("connected"));
};

module.exports = { connectToDb };
