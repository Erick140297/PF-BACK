const { Router } = require("express");
const bcrypt = require('bcrypt')
const router = Router();
const User = require("../../models/users");

router.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({ name, email, passwordHash })
    await user.save();
    res.status(200).json({ message: "User saved successfully" });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
