const { Router } = require("express");
const router = Router();
const Provider = require('../models/provider')

router.delete("/provider/:id", async (req, res) => {
  try {
    const { id } = req.params
    await Provider.findByIdAndDelete(id)
    res.status(200).json({message: "Provider deleted successfully"});
  } catch (error) {
    res.status(400).json("Error");
  }
});

module.exports = router;