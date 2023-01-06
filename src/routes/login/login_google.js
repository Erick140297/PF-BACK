const { Router } = require("express");
const router = Router();
require("dotenv").config();
const User = require("../../models/user");

router.post("/login_google", async (req, res) => {
  const { name, email } = req.body;
  const user = await User.findOne({ email });
  if(user === null){
    const user = new User({ name, email })
      await user.save();
      console.log("usuario creado")
      res.status(200).json({ message:"Usuario creado" });
  } else {
    console.log("Usuario ya registrado")
    res.status(200).json({message:"Usuario ya registrado"});
  } 
});

module.exports = router;
