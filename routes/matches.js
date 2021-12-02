var express = require('express');
var router = express.Router();
const userShouldBeLoggedIn = require('../guards/userShouldBeLoggedIn');

var models = require("../models")


router.get("/", async (req, res) => {
    try {
        const matches = await models.UsersJobs.findAll();
        res.send(matches);
    } catch (error) {
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
        const user = await models.User.findByPk(req.user_id)
        const match = await user.addMatch(JobId, { through: { "state": state } })
        res.send(match);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})

module.exports = router;