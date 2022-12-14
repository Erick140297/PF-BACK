const { Router } = require("express");
const router = Router();
const User = require("../../models/user");

router.get("/users", async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const usersByName = await User.find({
        name: { $regex: name, $options: "i" },
        deleteLogic: false,
      }).populate('services');
      res.status(200).json(usersByName);
    } else {
      const users = await User.find({ deleteLogic: false }).populate('services');
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
