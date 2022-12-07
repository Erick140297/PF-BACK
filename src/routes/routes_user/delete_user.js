const { Router } = require("express");
const router = Router();
const User = require("../../models/users");
const Services = require("../../models/service");

router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { deleteTemporaly } = req.query;
    if (deleteTemporaly) {
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
