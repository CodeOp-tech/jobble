var models = require("../models");
async function JobsMustExist(req, res, next) {
  try {
    const { id } = req.params;
    //find if there is an job with that ID in the DB
    const job = await models.Job.findByPk(id);
      
    //If there isn't
    if (!job) {
      //Return a 404 message
      return res.status(404).send({ message: "job not found" });
    }

    req.job = job
    console.log(req.job )
    next();
  } catch (err) {
    res.status(500).send(err);
    console.log(err)
  }
}
module.exports = JobsMustExist;