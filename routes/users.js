var express = require('express');
var router = express.Router();

var models = require("../models")

// get all users
router.get("/", async (req, res) => {
  try {
    const users = await models.User.findAll();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
})

// get all the users and jobs of each user
router.get("/jobs", async (req, res) => {
  try {
    const users = await models.User.findAll({
      include: models.Job,
    });
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
})

// get all the users that have matched a job
router.get("/:job_id/matches", async (req, res) => {
  try {
    const { id } = req.params

    const job = await models.Job.findByPk(id)
    const matches = await job.getMatch()
    res.send(matches)
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
})

// get all the jobs of a user
router.get("/:id/jobs", async (req, res) => {
  try {
    const user = await models.User.findOne({
      where: {
        id: req.params.id,
      }
    });
    const jobs = await user.getJobs();
    res.send(jobs);
  } catch (error) {
    res.status(500).send(error);
  }
})

// get user by id
router.get("/:id", async (req, res) => {
  try {
    const user = await models.User.findByPk(req.params.id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error)
  }
})

// post a user
router.post("/", async (req, res) => {
  try {
    const user = await models.User.create(req.body);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
})

// post a match of a user
// router.post("/:id/matches", async (req, res) => {
//   const { jobId } = req.body

//   try {
//     const user = await models.User.findByPk(req.params.id)
//     const match = await user.addMatch(jobId)
//     res.send(match);
//   } catch (error) {
//     console.log(error)
//     res.status(500).send(error);
//   }
// })

// post a job of a specific employer
router.post("/:id/job_offers", async (req, res) => {
  try {
    const user = await models.User.findOne({
      where: {
        id: req.params.id,
      }
    });
    const job = await user.createJob(req.body)
    res.send(job);
  } catch (error) {
    res.status(500).send(error);
  }
})



module.exports = router;