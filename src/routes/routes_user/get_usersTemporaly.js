const { Router } = require("express");
const router = Router();
const User = require("../../models/users");

router.get("/deletelogic", async (req, res) => {
  try {
    /* const { name } = req.query; */
    const users = await User.find({ deleteLogic: true }).populate("services");
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json("Error");
  }
});

module.exports = router;
