const { Router } = require("express");
const router = Router();
const User = require('../models/users')

router.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.find({id}).populate('services')
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json("Id not found");
  }
});

module.exports = router;