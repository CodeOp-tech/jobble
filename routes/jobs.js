var express = require('express');
var router = express.Router();

var models = require("../models")

// get all the jobs
router.get("/", async (req, res) => {
    try {
        const jobs = await models.Job.findAll();
        res.send(jobs);
    } catch (error) {
        res.status(500).send(error);
    }
})

// post a job
router.post("/", async (req, res) => {
    try {
        const job = await models.Job.create(req.body);
        res.send(job);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;