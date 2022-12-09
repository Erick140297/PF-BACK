const { Router } = require("express");
const { uploadImage } = require("../../utils/cloudinary");
const fs = require("fs-extra");
const Service = require("../../models/service");
const User = require("../../models/users");
const router = Router();

router.post("/services", async (req, res) => {
  try {
    const { name, description, online, id } = req.body;

    console.log(req.body)
    console.log(req.files)

    const user = await User.findById(id);
    const service = new Service({
      name,
      description,
      online,
      user: user._id,
    });

    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      service.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      await fs.unlink(req.files.image.tempFilePath);
    }

    const savedService = await service.save();
    user.services = user.services.concat(savedService._id);
    user.provider = true;
    await user.save();
    res
      .status(200)
      .json({ message: "Service saved successfully", service: savedService });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
