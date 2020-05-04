// index.js

/**
 * Required External Modules
 */
const express = require("express");
const loginRoutes = require("./routes/loginRT");
// const aboutRoutes = require("./api/about");
// const servicesRoutes = require("./api/services");
// const iotApi = require("./api/IoT_API");
// const PublicRoutes = require("./api/public");

/**
 *  App Configuration
 */
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");


// start monitoring
app.use(morgan("dev"));
// // handling cors errors
app.use(cors());
// // parsing request data body
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Routes Definitions
 */
app.use("/login", loginRoutes);
app.get("/", (req, res) => {
  res.status(200).send("Base IoT Mock API");
});
// app.use("/services", servicesRoutes);
// app.use("/iotApi", iotApi);
// app.use("/public", PublicRoutes);

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
