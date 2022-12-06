const { Router } = require("express");
const router = Router();
const User = require("../models/users");

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json("Error");
  }
});

module.exports = router;
