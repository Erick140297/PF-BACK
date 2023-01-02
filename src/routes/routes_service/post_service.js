const { Router } = require("express");
const { uploadImage } = require("../../utils/cloudinary");
const fs = require("fs-extra");
const multer  = require('multer')
const Service = require("../../models/service");
const User = require("../../models/user");
const sendMail = require("../../utils/nodemailer")

const router = Router();
// const jwt = require('jsonwebtoken')
require("dotenv").config();
const upload = multer({ dest: 'uploads/' })

router.post("/services", upload.single("image"), async (req, res) => {
  try {
    
    const { userName, userEmail, name, price, description, country } = req.body;
    // const authorization = request.get('authorization')
    // let token = '';
    // if(authorization && authorization.toLowerCase().startsWith('bearer')){
    //   token = authorization.substring(7)
    // }
    // const decodedToken = jwt.verify(token, process.env.SECRET)
    // if(!token || !decodedToken.id){
    //   return res.status(401).json({ error: 'Token missing or invalid.' })
    // }

    let checkUser = await User.findOne({email:userEmail})

    if(checkUser === null){
      // checkUser = new User({name:userName,  image:userImage, email:userEmail}) 
      checkUser = new User({name:userName, email:userEmail}) 
      await checkUser.save();
    }

    let user = await User.findOne({email:userEmail})

    const service = new Service({
      name,
      description,
      price,
      user: user._id,
      country
    });

    if (req.file.fieldname) {
      const result = await uploadImage(req.file.path);
      service.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      await fs.unlink(req.file.path);
    }

    const savedService = await service.save();
    user.services = user.services.concat(savedService._id);
    user.provider = true;
    await user.save();
    // await sendMail(userName, userEmail, name);
    res
      .status(200)
      .json({ message: "Service saved successfully", service: savedService });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
