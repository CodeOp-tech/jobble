var models = require("../models");
async function JobsMustExist(req, res, next) {
  try {
    const { id } = req.params;
    //find if there is an job with that ID in the DB
    const results = await models.Job.findByPk(req.params.id);
      
    //If there isn't
    if (!results.dataValues) {
      //Return a 404 message
      return res.status(404).send({ message: "job not found" });
    }

    req.job = results
    console.log(req.job + "req")
    next();
  } catch (err) {
    res.status(500).send(err);
    console.log(err)
  }
}
module.exports = JobsMustExist;
