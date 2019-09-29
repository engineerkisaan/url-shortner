const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect(process.env.mongoURI, {
      useNewUrlParser: true
    })
    .then(console.log("Database connected ..."))
    .catch(error => {
      console.log(error.message);
      process.exit(1);
    });
};

module.exports = connectDB