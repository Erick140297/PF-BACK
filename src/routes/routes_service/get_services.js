const { Router } = require("express");
const router = Router();
const Service = require('../../models/service')

router.get("/services", async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const serviceByName = await Service.find({
        name: { $regex: name, $options: "i" },
        deleteLogic: false,
      }).populate('user');
      res.status(200).json(serviceByName);
    } else {
      const services = await Service.find().populate('user');
      res.status(200).json(services);
    }
  } catch (error) {
    res.status(400).json("Id not found");
  }
});

module.exports = router;