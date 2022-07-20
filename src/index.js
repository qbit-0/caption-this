"use strict";
const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
    res.send("Testing 123!");
});

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
