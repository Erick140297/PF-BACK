const { Router } = require("express");
const router = Router();
const sendMail = require("../utils/nodemailer")

router.post("/emailtest", async (req, res) => {
  try {
    const { userName, userEmail, name } = req.body;
    const result = await sendMail(userName, userEmail, name);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;

// const emailTest = require("./emailTest")

// router.use(emailTest);
