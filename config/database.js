const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.DATABASE_URL;
const dbConnect = () => {
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
module.exports=dbConnect;