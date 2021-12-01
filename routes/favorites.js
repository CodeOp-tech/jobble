var express = require('express');
var router = express.Router();
var models = require("../models");

router.get("/:User_id", async (req, res) => {
  try {
    const { User_id } = req.params

    const user = await models.User.findByPk(User_id)
    const favorites = await user.getFavorite()
    res.send(favorites)
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
})

  

  router.post("/profile", async (req, res) => {
    const { JobId, UserId } = req.body

    try {
        const user = await models.User.findByPk(UserId)
        const match = await user.addFavorite(JobId)
        res.send(match);
        console.log("user", user);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})



router.delete('/:JobId', async (req, res) => {
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