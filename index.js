var express = require("express");
var morgan = require("morgan");
var consign = require("consign");//serve para organizar os endpoints 

const app = express();

app.use(morgan("dev"));

consign()
        .include("libs/config.js")
        .then("db.js")
        .then("libs/middlewares.js")
        .then("routes")
        .then("libs/boot.js")
        .into(app);

//pag 50