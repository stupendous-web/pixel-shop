const { MailtrapClient } = require("mailtrap");

export default function handler(req, res) {
  const TOKEN = process.env.REACT_APP_TOKEN;
  const ENDPOINT = "https://send.api.mailtrap.io/";

  const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

  const sender = {
    email: "topher@stupendousweb.com",
    name: "Stupendous Web",
  };
  const recipients = [
    {
      // email: "sumiez@thepixelshop.app",
      email: "topherjamesknoll@gmail.com",
    },
  ];

  client
    .send({
      from: sender,
      to: recipients,
      subject: "New Lead!",
      text: `Name: ${req.body.name}\r\nEmail: ${req.body.email}\r\nTwitter: ${req.body.twitter}\r\nMessage: ${req.body.message}`,
      headers: {
        "X-MT-Category": "Integration Test",
      },
    })
    .then((success, error) => {
      if (success) {
        res.send("Your message was sent!");
      } else {
        res.status(500).json({ error });
      }
    });
}
