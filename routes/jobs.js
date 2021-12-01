var express = require("express");
var router = express.Router();
var jobsMustExist = require("../guards/JobsMustExist");
const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
const ShouldBeAdmin = require("../guards/ShouldBeAdmin");

var models = require("../models");

// get all the jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await models.Job.findAll();
    res.send(jobs);
  } catch (error) {
    res.status(500).send(error);
  }
});

// post a job
router.post("/", [userShouldBeLoggedIn, ShouldBeAdmin], async (req, res) => {
  try {
    const job = await req.user.createJob(req.body);
    res.send(job);
  } catch (error) {
    res.status(500).send(error);
  }
});

// to get one job by id
router.get("/:id", jobsMustExist, function (req, res) {
  res.send(req.job);
});

module.exports = router;
