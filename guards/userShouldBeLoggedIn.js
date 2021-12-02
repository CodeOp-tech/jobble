const jwt = require("jsonwebtoken");
require("dotenv").config();
const supersecret = process.env.SUPER_SECRET;
const models = require("../models");

function userShouldBeLoggedIn(req, res, next) {
  console.log("this is the header", req.headers);
  const token = req.headers["authorization"]?.replace(/^Bearer\s/, "");
  console.log("this is the secret shhh", token, supersecret);
  if (!token) {
    res.status(401).send({ message: "Please provide a token" });
  } else {
    
    //verify the token
    jwt.verify(token, supersecret, async function (err, decoded) {
      if (err) res.status(401).send({ message: err.message });
      else {
        const user = await models.User.findOne({
          where: {
            id: decoded.user_id,
          },
        });
        if (!user) return res.status(401).send({ message: "user not found" });
        //everything is awesome
        console.log(user);
        req.user = user;
        next();
      }
    });
    // res.send({message: "everything is fine"});
  }
}
module.exports = userShouldBeLoggedIn;

