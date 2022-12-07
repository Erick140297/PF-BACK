const { Router } = require("express");
const router = Router();
const Service = require("../../models/service");

router.put('/services/:id', async (req, res) => {
    try {
        const id = req.params.id

        await Service.findByIdAndUpdate(id, req.body);
        res.status(201).send({message: "User updated successfully"});

    } catch (error) {
        console.error(error);
    }
});

module.exports = router;
