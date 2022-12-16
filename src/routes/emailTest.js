const { Router } = require("express");
const router = Router();
const nodemailer = require("nodemailer");
const {google} = require("googleapis");

router.post("/emailtest", async (req, res) => {
  const { userName, userEmail, name } = req.body;
  const contentHtml = `
  <h1>e-mail enviado con nodemailer</h1>
  <ul>
    <li>Welcome: ${userName}</li>
    <li>message: ${name}</li>
  </ul>`;
  const CLIENT_ID = "1077631869308-iui2hkd43nicvuqrih4jj54jv4bfqbbg.apps.googleusercontent.com";
  const CLIENT_SECRET = "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";
  const REDIRECT_URI = "https://developers.google.com/oauthplayground";
  const REFRESH_TOKEN ="1//04OtQpsXU8ZfQCgYIARAAGAQSNwF-L9IrC_2Vd8jjazwbZl83YxQtyeLkuLfHhjoKdBpB8UcdaKlyufWxrSAYj-c5kp1ZyxtE4xk";

  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  async function sendMail() {
    try {
      const accessToken = await oAuth2Client.getAccessToken();
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "freelanceworkerspf@gmail.com",
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });
      const mailOptions = {
        from: "Enviado con nodemailer <freelanceworkerspf@gmail.com>",
        to: `${userEmail}`,
        subject: "Nodemailer Test",
        html: contentHtml,
      };
      const result = await transporter.sendMail(mailOptions);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  sendMail()
    .then((result) => res.status(200).json(result))
    .catch((error) => console.log(error.message));
});

module.exports = router;

// const emailTest = require("./emailTest")

// router.use(emailTest);


