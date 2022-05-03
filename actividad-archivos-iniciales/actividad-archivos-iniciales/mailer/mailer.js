const nodemailer = require("nodemailer");

const mailConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "norma.bernier40@ethereal.email",
    pass: "EUW9777erTFCQBYFaW",
  },
};

module.exports = nodemailer.createTransport(mailConfig);
