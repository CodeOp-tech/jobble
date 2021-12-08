var express = require('express');
var router = express.Router();
const userShouldBeLoggedIn = require('../guards/userShouldBeLoggedIn');
const jobsMustExist = require('../guards/jobsMustExist');
const ShouldBeAdmin = require('../guards/ShouldBeAdmin');

var models = require("../models")


router.get("/", async (req, res) => {
    try {
        const matches = await models.UsersJobs.findAll();
        res.send(matches);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.get("/users/:userid", async (req, res) => {
    try {
        const matches = await models.UsersJobs.findAll({
            where: {
                UserId: req.params.userid
            }
        });
        res.send(matches);
    } catch (error) {
        res.status(500).send(error);
    }
})

router.get("/users/:id", async (req, res) => {
    try {
        const matches = await req.user.getMatches({ JobId });
        //const jobs = await models.Job.FindAll({
        //Where: JobId= jobs in Matches
        res.send(matches);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

router.get("/employers/:id", [userShouldBeLoggedIn, ShouldBeAdmin], async (req, res) => {
    try {
        const id = req.user.id
        const employerJobs = await models.Job.findAll({
            include: [{
                model: models.User,
                as: "Match",
                through: { where: { state: "accepted" } }
            }],
            where: {
                EmployerId: id
            }
        });
        res.send(employerJobs);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

// post a job match of a user
// router.post("/", async (req, res) => {
//     const { jobId, userId } = req.body

//     try {
//         const user = await models.User.findByPk(userId)
//         const match = await user.addMatch(jobId)
//         res.send(match);
//     } catch (error) {
//         console.log(error)
//         res.status(500).send(error);
//     }
// })

// post a job match of a user (with state)
router.post("/", userShouldBeLoggedIn, async (req, res) => {
    const { JobId, state } = req.body

    try {
        const user = await models.User.findByPk(req.user.id)
        const match = await req.user.addMatch(JobId, { through: { "state": state } })
        const job = await models.Job.findByPk(JobId)
        res.send(job);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})

// delete a Match
router.delete("/:job_id/:user_id", [userShouldBeLoggedIn], async function (req, res) {
    try {
        const match = await models.UsersJobs.findOne({
            where: {
                JobId: req.params.job_id,
                UserId: req.params.user_id
            }
        })
        const destroy = await match.destroy()
        res.send(match)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }

});

module.exports = router;