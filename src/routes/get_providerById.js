const { Router } = require("express");
const router = Router();
const Provider = require('../models/provider')

router.get("/provider/:id", async (req, res) => {
  try {
    const { id } = req.params
    const provider = await Provider.findById(id)
    res.status(200).json(provider);
  } catch (error) {
    res.status(400).json("Error");
  }
});

module.exports = router;