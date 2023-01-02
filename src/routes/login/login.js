const { Router } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = Router();
require("dotenv").config();
const User = require("../../models/user");

const { SECRET } = process.env;

router.post("/login", async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });
  res.status(200).send({user});
  // const passwordCorrect =
  //   user === null ? false : bcrypt.compare(password, user.passwordHash);

  // if (!(user && passwordCorrect)) {
  //   return res.status(401).json({
  //     error: "invalid username or password",
  //   });
  // }

  // const userForToken = {
  //   name: user.name,
  //   id: user._id,
  //   email: user.email
  // };

  // const token = jwt.sign(userForToken, SECRET);
  // res.status(200).send({ token, name: user.name, id: user._id, email: user.email });
});

module.exports = router;
