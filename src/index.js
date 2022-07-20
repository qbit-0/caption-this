"use strict";
const express = require("express");
const exphbs = require("express-handlebars");
const Sequelize = require("sequelize");
const path = require("path");
const db = require("../models");

db.sequelize
    .authenticate()
    .then(() => {
        console.log("Database connected...");
    })
    .catch((err) => {
        console.log("Error: " + err);
    });

const app = express();

app.get("/", (req, res) => {
    res.send("Testing 123!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
