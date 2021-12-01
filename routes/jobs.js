var express = require('express');
var router = express.Router();
var jobsMustExist = require("../guards/JobsMustExist");
const userShouldBeLoggedIn = require('../guards/userShouldBeLoggedIn');
const { Sequelize } = require('sequelize');

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

// get a random job
router.get("/random", async (req, res) => {
    try {
        const jobs = await models.Job.findAll({
            order: Sequelize.literal('rand()'),
            limit: 1
        });
        res.send(jobs);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})

// post a job
// router.post("/", userShouldBeLoggedIn, async (req, res) => {
//     try {
//         const job = await models.Job.create(req.body);
//         res.send(job);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })


// to get one job by id
router.get("/:id", jobsMustExist, function (req, res) {

    res.send(req.job)
});

module.exports = router;