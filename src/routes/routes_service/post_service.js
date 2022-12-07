const { Router } = require("express");
const router = Router();
const Service = require("../../models/service");
const User = require("../../models/users");

router.post("/services", async (req, res) => {
  try {
    const { name, description, id} = req.body
    const user = await User.findById(id)

    const service = new Service({name, description, user:user._id});
    const savedService = await service.save();
    user.services = user.services.concat(savedService._id)
    await user.save()
    res.status(200).json({ message: "Service saved successfully" });
  } catch (error) {
    res.status(400).json("Errores");
  }
});

module.exports = router;