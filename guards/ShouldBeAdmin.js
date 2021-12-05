var models = require("../models");

async function ShouldBeAdmin(req, res, next) {
    try {
      if (!req.user.admin) {
        //Return a 403 message
        return res.status(403).send({ message: "user not Authorized" });
      }
      console.log(req.user.admin )
      next();
    } catch (err) {
      res.status(500).send(err);
      console.log(err)
    }
  }
  module.exports = ShouldBeAdmin;