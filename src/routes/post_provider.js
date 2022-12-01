const { Router } = require("express")
const router = Router()
const Provider = require("../models/provider")

router.post("/provider", async (req, res) => {
  try {
    const { name, email, service } = req.body
    const provider = new Provider( { name, email, service })
    const providerSave = await provider.save()
    res.status(200).json({message: "Provider saved successfully"});
  } catch (error) {
    res.status(400).json("Error");
  }
})

module.exports = router;
