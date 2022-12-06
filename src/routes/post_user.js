const { Router } = require("express");
const router = Router();
const User = require("../models/users");

router.post("/users", async (req, res) => {
  try {
    const { name, email, password, deleteLogic } = req.body
    const user = new User({ name, email, password, deleteLogic })
    /* const user = new User(req.body); */
    await user.save();
    res.status(200).json({ message: "User saved successfully" });
  } catch (error) {
    res.status(400).json("Error");
  }
});

module.exports = router;
