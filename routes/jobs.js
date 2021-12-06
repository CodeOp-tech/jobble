var express = require("express");
var router = express.Router();
var jobsMustExist = require("../guards/JobsMustExist");
const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
const ShouldBeAdmin = require("../guards/ShouldBeAdmin");
const {Op} = require("sequelize")


var models = require("../models");

// get all the jobs
router.get("/", async (req, res) => {
  console.log("I'm here")
  const { title } = req.query;
  let jobs = "";
  try {
    if (title) {
     jobs = await models.Job.findAll({
      where: {
        title: {
          [Op.like]: `%${title}%`
        }
      }
      });  
    }else {
      jobs = await models.Job.findAll()
    }
    res.send(jobs);
  } catch (error) {
    res.status(500).send(error);
  }
});

// get a random job
router.get("/random", userShouldBeLoggedIn, async (req, res) => {
    try {
        const jobs = await models.Job.findAll({
            include: models.Job.Match,
            // attributes: { exclude: { ["state"]: "accepted" } },
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
//         const user = await models.User.findOne({
//             where: {
//                 id: req.user_id,
//             }
//         });
//         const job = await user.createJob(req.body);
//         res.send(job);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })


router.post("/", [userShouldBeLoggedIn, ShouldBeAdmin], async (req, res) => {
  try {
    const job = await req.user.createJob(req.body);
    res.send(job);
  } catch (error) {
    res.status(500).send(error);
  }
});


// delete one job by id
router.delete("/:id", [jobsMustExist, userShouldBeLoggedIn, ShouldBeAdmin], async function (req, res) {
    try {
        const job = req.job
        // const match = await models.UsersJobs.findOne({
        //     where: {
        //         JobId: job.dataValues.id,
        //         UserId: req.user_id
        //     }
        // })
        // if (match) {
        //     await match.destroy()
        // }
        await job.destroy()

        res.send(job)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }

});


// to get one job by id
router.get("/:id", jobsMustExist, function (req, res) {

  // try {
  //   const {id} = req.params;
  //   const job = await models.Job.findbyPK(id)
  //   console.log(job)
    res.send(req.job)
//   }catch (error) {
//     console.log(error)
//     res.status(500).send(error);
// }
 
});


// get all the user matches of a specific job
router.get("/:job_id/matches", async (req, res) => {
    try {
        const { job_id } = req.params

        const job = await models.Job.findByPk(job_id)
        console.log(job)
        const matches = await job.getMatch()
        res.send(matches)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})


module.exports = router;
