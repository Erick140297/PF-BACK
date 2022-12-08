const { Router } = require("express");
const router = Router();
const Service = require('../../models/service');

router.delete("/services/:id", async ( req, res ) => {
    try {
        const {id} = req.params;
        await Service.findOneAndDelete({ id });
        res.status(200).send({ message: "Service deleted successfully" });
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;
