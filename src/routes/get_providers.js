const { Router } = require("express");
const router = Router();
const Provider = require('../models/provider')

router.get("/providers", async (req, res) => {
  try {
    const providers = await Provider.find()
    res.status(200).json(providers);
  } catch (error) {
    res.status(400).json("Error");
  }
});

module.exports = router;