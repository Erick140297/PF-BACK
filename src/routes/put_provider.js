const { Router } = require("express");
const router = Router();
const Provider = require('../models/provider')

router.put("/provider/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { name, email, service } = req.body
    await Provider.findByIdAndUpdate( id, {name, email, service})
    res.status(200).json({message: "Provider updated successfully"});
  } catch (error) {
    res.status(400).json("Error");
  }
})

module.exports = router;