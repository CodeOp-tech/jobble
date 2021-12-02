var express = require('express');
var router = express.Router();
require("dotenv").config();
var models = require("../models")
var jwt = require("jsonwebtoken");
const supersecret = process.env.SUPER_SECRET;
var bcrypt = require("bcrypt");
const saltRounds = 10;


// post a user
router.post("/register", async (req, res) => {
  const { firstname, lastname, email, password, admin, Username } = req.body
  try {
    const hash = await bcrypt.hash(password, saltRounds)
    console.log(hash)
    const user = await models.User.create({ firstname: firstname, lastname: lastname, email: email, password: hash, admin: admin, Username: Username });
    res.send(user);
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
});

//login
router.post("/login", async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await models.User.findOne({
      where: {
        Username: username
      }
    })
    if (user.dataValues) {
      const userId = user.dataValues.id
      const correctPassword = await bcrypt.compare(password, user.dataValues.password)

      if (!correctPassword) throw new Error("Incorrect password");

      var token = jwt.sign({ userId }, supersecret);
      res.send({ message: "Login successful, here is your token", token });

    } else {
      throw new Error("User does not exist");
    }
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
});





module.exports = router;