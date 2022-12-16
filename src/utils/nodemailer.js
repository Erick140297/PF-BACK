const nodemailer = require("nodemailer");

const createTransport = () => {

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "erick@pf-back-production-b443.up.railway.app",
      pass: "MongoDBPF",
    },
  });
  return transport;
};

const sendMail = async (userName, userEmail, name) => {
  const transporter = createTransport();
  await transporter.sendMail({
    from: "erick@pf-back-production-b443.up.railway.app", // sender address
    to: `${userEmail}`, // list of receivers
    subject: `Hello ${userName}, welcome to Freelance Workers`, // Subject line
    html: `<p>your service was created successfully, <b>${name}</b></p>`, // html body
  });
  return
};

exports.sendMail = (userName, userEmail, name) => sendMail(userName, userEmail, name)