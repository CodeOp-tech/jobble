var express = require('express');
var router = express.Router();
require("dotenv").config();
var models = require("../models")
var bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");



// post a user
router.post("/register", async (req, res) => {
    const {firstname, lastname, email, password, admin, Username } = req.body
    try {
      const hash = await bcrypt.hash(password, saltRounds)
      const user = await models.User.create({firstname: firstname, lastname: lastname, email: email, password: hash, admin: admin, Username: Username});
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  //login
  router.post("/login", async (req, res) => {
    const {Username, password} = req.body
    try {
      const hash = await bcrypt.hash(password, saltRounds)
      const user = await models.User.create({Username: Username, password: hash});
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });





module.exports = router;