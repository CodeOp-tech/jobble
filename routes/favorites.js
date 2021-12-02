var express = require('express');
var router = express.Router();
var models = require("../models");
const userShouldBeLoggedIn = require('../guards/userShouldBeLoggedIn');
const ShouldBeAdmin = require('../guards/ShouldBeAdmin');


router.get("/:UserId", userShouldBeLoggedIn, async (req, res) => {
  try {
    const { UserId } = req.params

    const user = await models.user.findByPk(UserId)
    const favorites = await req.user.getFavorite( { UserId } );
     res.send(favorites)
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
})

  

  router.post("/profile", userShouldBeLoggedIn, async (req, res) => {
    const { UserId, JobId } = req.body

    try {
        const user = await models.User.findByPk(UserId)
        const match = await user.createFavorite( { UserId, JobId } );
        res.send(match);
        console.log("user", user);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})



router.delete('/:JobId', [userShouldBeLoggedIn, ShouldBeAdmin ], async (req, res) => {
  const { JobId } = req.params
  const user = await models.User.findByPk(UserId)
  const favorites = await user.getFavorite()
  console.log("USER: ",user);
  console.log(UserId, "USER ID");
  console.log(favorites, "flag");

    //  favorites.destroy({
    // where: {

    //   UserId: UserId
      
    // }

    // try {
    //   const user = await models.User.findOne({
    //     where: {
    //       id: UserId
    //     },
    //     await User.destroy ({
    //         where: {
    //             UserId: UserId,
    //             JobId: JobId
    //         }
    //     })
    //     res.status(200).send("Successfuly deleted post")
    // } catch (err) {
    //     console.log(err)
    //     res.status(500).send({
    //         error: "There was an error deleting this post"
    //     })
    // }
})


 
  
  module.exports = router;