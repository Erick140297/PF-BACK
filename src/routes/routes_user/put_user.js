const { Router } = require("express");
const router = Router();
const User = require('../models/users')

router.put("/users/:id", async (req, res) => {
    try {
    const { id } = req.params
    /* const { name, email, service } = req.body */
    await User.findByIdAndUpdate( id, req.body)
    res.status(200).json({message: "User updated successfully"});
    } catch (error) {
    res.status(400).json("Error");
    }
})

module.exports = router;