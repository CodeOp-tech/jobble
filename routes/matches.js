var express = require('express');
var router = express.Router();

var models = require("../models")

// post a job match of a user
router.post("/", async (req, res) => {
    const { jobId, userId } = req.body

    try {
        const user = await models.User.findByPk(userId)
        const match = await user.addMatch(jobId)
        res.send(match);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})

module.exports = router;