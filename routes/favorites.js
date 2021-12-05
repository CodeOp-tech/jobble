var express = require("express");
var router = express.Router();
var models = require("../models");
const userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
const ShouldBeAdmin = require("../guards/ShouldBeAdmin");

router.get("/profile", userShouldBeLoggedIn, async (req, res) => {
  const { JobId } = req.body;
  try {
    const favorites = await req.user.getFavorite({ JobId });
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
    const match = await req.user.addFavorite(JobId);
    console.log("here again");
    res.send(match);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

//Delete a favorite
router.delete("/:JobId", userShouldBeLoggedIn, async (req, res) => {
  const { JobId } = req.params;

  try {
    // const job = req.job;
    const favorites = await req.user.removeFavorite(JobId);

    res.send({ message: "job was deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
