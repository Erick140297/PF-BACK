const { Router } = require("express");
const router = Router();
const User = require("../../models/user");
const Services = require("../../models/service");

router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { deletelogic } = req.query;
    if (deletelogic) {
      await User.findByIdAndUpdate(id, { deleteLogic: true });
      res.status(200).send({ message: "User deleted temporaly successfully" });
    } else {
      await User.findOneAndDelete({ id });
      res.status(200).send({ message: "User deleted successfully" });
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
