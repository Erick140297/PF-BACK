const { Router } = require("express");
const router = Router();
const User = require('../models/users')

router.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.find({id})
    console.log(user)
    return user.length? res.status(200).json(user) : res.status(400).json("Id not found");
  } catch (error) {
    res.status(400).json("Id not");
  }
});

module.exports = router;