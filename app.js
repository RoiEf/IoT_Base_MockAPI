// index.js

/**
 * Required External Modules
 */
const express = require("express");
const loginRT = require("./routes/loginRT");
const updatesRT = require("./routes/updatesRT");
const homeRT = require("./routes/homeRT");
const basicRT = require("./routes/basicRT");
const networkRT = require("./routes/networkRT");

const temprature = require("./routes/tempratureRT");
/**
 *  App Configuration
 */
const app = express();
const morgan = require("morgan");
// const bodyParser = require("body-parser");
const formidableMiddleware = require("express-formidable");
const cors = require("cors");

// start monitoring
app.use(morgan("dev"));
// // handling cors errors
app.use(cors());
// // parsing request data body
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(formidableMiddleware());
/**
 * Routes Definitions
 */
app.use("/", homeRT);
app.use("/login", loginRT);
app.use("/updates", updatesRT);
app.use("/basic", basicRT);
app.use("/network", networkRT);
app.use("/wifi", networkRT);

app.use("/temprature", temprature);

// error handling
// 404 Not found page errors
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// chatch all other system errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
  });
});

module.exports = app;
