var express = require("express");
var router = express.Router();
var models = require("../models");
const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
const ShouldBeAdmin = require("../guards/ShouldBeAdmin");

router.get("/:UserId", userShouldBeLoggedIn, async (req, res) => {
  const { UserId } = req.params;
  try {
    const user = await models.user.findByPk(UserId);
    const favorites = await req.user.getFavorite({ UserId });
    res.send(favorites);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/profile", userShouldBeLoggedIn, async (req, res) => {
  const { JobId } = req.body;

  try {
    console.log("here");
    const match = await req.user.addFavorite( JobId );
    console.log("here again");
    res.send(match);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete(
  "/:JobId",
  [userShouldBeLoggedIn, ShouldBeAdmin],
  async (req, res) => {
    try {
      const job = req.job;

      await req.user.destroyFavorite();

      res.send(job);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }

    //     res.status(200).send("Successfuly deleted post")
    // } catch (err) {
    //     console.log(err)
    //     res.status(500).send({
    //         error: "There was an error deleting this post"
    //     })
    // }
  }
);

module.exports = router;
