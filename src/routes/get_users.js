const { Router } = require("express");
const router = Router();
const User = require("../models/users");

router.get("/users", async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const usersByName = await User.find({
        name: { $regex: name, $options: "i" },
        deleteLogic: false,
      });
      res.status(200).json(usersByName);
    } else {
      const users = await User.find({ deleteLogic: false });
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(400).json("Error");
  }
});

module.exports = router;
