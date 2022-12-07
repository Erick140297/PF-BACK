const { Router } = require("express");
const router = Router();
const User = require("../../models/users");

router.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body
    const user = new User({ name, email, password })
    await user.save();
    res.status(200).json({ message: "User saved successfully" });
  } catch (error) {
    res.status(400).json(console.log(error));
  }
});

module.exports = router;
