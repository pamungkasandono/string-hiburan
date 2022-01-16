const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// initialize express
const app = express();

// logging request
app.use(morgan("short"));

// parse json from body
app.use(bodyParser.json());

// view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "../Views"));

// load assets
app.use("/css", express.static(path.resolve(__dirname, "../../assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "../../assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "../../assets/img")));

module.exports = { app: app };
