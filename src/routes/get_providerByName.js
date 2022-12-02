const { Router } = require("express");
const router = Router();
const Provider = require('../models/provider')

router.get("/provider", async (req, res) => {
  try {
    const { name } = req.query
    const provider = await Provider.findOne({name})
    res.status(200).json(provider);
  } catch (error) {
    res.status(400).json("Error");
  }
});

module.exports = router;