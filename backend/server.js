require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mailchimp = require("@mailchimp/mailchimp_transactional")(
  process.env.MAILCHIMP_API_KEY
);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  try {
    const response = await mailchimp.messages.send({
      message: {
        from_email: "your-email@gmail.com", // Mailchimp sender email
        to: [{ email: process.env.RECEIVER_EMAIL, type: "to" }],
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      },
    });

    console.log(response);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email!" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
