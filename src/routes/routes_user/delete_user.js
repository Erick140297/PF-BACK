const { Router } = require("express");
const router = Router();
const User = require("../../models/user");
const Services = require("../../models/service");

// router.delete("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { deletelogic } = req.query;
//     if (deletelogic) {
//       await User.findByIdAndUpdate(id, { deleteLogic: true });
//       res.status(200).send({ message: "User deleted temporaly successfully" });
//     } else {
//       await User.findOneAndDelete({ id });
//       res.status(200).send({ message: "User deleted successfully" });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// });

router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate("services");
    let servicesArray = [];
    user.services.forEach((e) => {
      servicesArray.push(e._id);
    });

    servicesArray.map(async (e) => {
      await Services.findByIdAndDelete(e);
    });

    await User.findByIdAndDelete(id);

    // const user2 = await User.findById(id).populate("services")
    // if(user2.services.length === 0) await User.findByIdAndDelete(id)

    // : new Error("No se pudo")

    // console.log(servicesArray)
    res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

module.exports = router;
