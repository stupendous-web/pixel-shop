const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  async function send() {
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    return transport.sendMail({
      from: '"Stupendous Web" <info@stupendousweb.com>',
      to: "contact@thepixelshop.app",
      // to: "topherjamesknoll@gmail.com",
      subject: "New Lead!",
      text: `Name: ${req.body.name}\r\nEmail: ${req.body.email}\r\nTwitter: ${req.body.twitter}\r\nDiscord: ${req.body.discord}\r\nMessage: ${req.body.message}`,
    });
  }

  try {
    await send();
    return res.send("Your message has been sent!");
  } catch (error) {
    return res.status(500).send(error);
  }
}
