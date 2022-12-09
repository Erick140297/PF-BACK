const { Router } = require("express");
const router = Router();
const Service = require('../../models/service')

router.get("/services", async (req, res) => {
  try {
    const { name } = req.query;
    let services = [] 
    if (name) {
      const data = await Service.find({
        name: { $regex: name, $options: "i" },
        deleteLogic: false,
      }).populate('user');
      services = data.filter(e => e.user.deleteLogic !== true)
      res.status(200).json(services);
    } else {
      const data = await Service.find().populate('user');
      services = data.filter(e => e.user.deleteLogic !== true)
      res.status(200).json(services);
    }
  } catch (error) {
    res.status(400).json({mesage: error});
  }
});

module.exports = router;