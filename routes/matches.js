var express = require('express');
var router = express.Router();

var models = require("../models")

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
router.post("/", async (req, res) => {
    const { UserId, JobId, state } = req.body

    try {
        const user = await models.User.findByPk(UserId)
        console.log(JobId)
        const match = await user.addMatch(JobId, { through: { "state": state } })
        res.send(match);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})

module.exports = router;