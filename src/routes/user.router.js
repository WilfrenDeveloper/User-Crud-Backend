const { getAll, createUser, getUser, removeUser, updateUser } = require('../controllers/user.controllers');
const express = require('express');

const user = express.Router();

user.route("/users")
		.get(getAll)
        .post(createUser)

user.route("/users/:id")
		.get(getUser)
        .delete(removeUser)
        .put(updateUser)

module.exports = user;