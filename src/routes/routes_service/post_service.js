const { Router } = require("express");
const { uploadImage } = require("../../utils/cloudinary");
const fs = require("fs-extra");
const Service = require("../../models/service");
const User = require("../../models/user");
const router = Router();
const jwt = require('jsonwebtoken')
require("dotenv").config();

router.post("/services", async (req, res) => {
  try {
    const { userName, userEmail, userImage, name, description } = req.body;

    const authorization = request.get('authorization')

    let token = '';

    if(authorization && authorization.toLowerCase().startsWith('bearer')){
      token = authorization.substring(7)
    }

    const decodedToken = jwt.verify(token, process.env.SECRET)

    if(!token || !decodedToken.id){
      return res.status(401).json({ error: 'Token missing or invalid.' })
    }

    let checkUser = await User.findOne({email:userEmail})

    if(checkUser === null){
      console.log(userName, userImage, userEmail)
      checkUser = new User({name:userName,  image:userImage, email:userEmail}) 
      await checkUser.save();
    }

    let user = await User.findOne({email:userEmail})
     
    const service = new Service({
      name,
      description,
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
      // .json(checkUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
