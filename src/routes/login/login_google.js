const { Router } = require("express");
const router = Router();
require("dotenv").config();
const User = require("../../models/user");

router.post("/login_google", async (req, res) => {
  const { name, email } = req.body;
  const user = await User.findOne({ email });
  if (user === null) {
    const user = new User({ name, email });
    const contentHtml = `
    <h1>congratulations</h1>
    <br/><br/>
    <h1>Your account has been successfully created</h1>
  `;
    await sendMail(contentHtml, email);
    await user.save();
    res.status(200).json({ message: "Usuario creado" });
  } else {
    res.status(200).json({ message: "Usuario ya registrado" });
  }
});

module.exports = router;
