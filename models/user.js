"use strict";

const Sequelize = require("sequelize");
const db = require("../models");

const User = db.define("user", {
    id: {
        type: Sequelize.INTEGER,
    },
    username: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
    created_at: {
        type: Sequelize.DATE,
    },
    updated_at: {
        type: Sequelize.DATE,
    },
});

module.exports = User;
