const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = Router();
require("dotenv").config();
const User = require("../../models/users");

const { SECRET } = process.env;

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: "invalid username or password",
    });
  }

  const userForToken = {
    name: user.name,
    id: user._id,
  };

  const token = jwt.sign(userForToken, SECRET);

  res.status(200).send({ token, name: user.name, id: user._id });
});

module.exports = router;