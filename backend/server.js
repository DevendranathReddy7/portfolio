const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, companyName, message } = req.body;

  if (!name) {
    res.status(400).json({ message: "Please provide a valid Name" });
    return;
  }
  if (!email) {
    res.status(400).json({ message: "Please provide a valid Email" });
    return;
  }
  if (!companyName) {
    res.status(400).json({ message: "Please provide your Company Name" });
    return;
  }
  if (!message) {
    res.status(400).json({ message: "Message field can't be empty!" });
    return;
  }

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Your Gmail
        pass: process.env.PASSWORD, // App Password
      },
    });

    let mailOptions = {
      from: process.env.EMAIL,
      replyTo: email,
      to: process.env.EMAIL,
      subject: `Message from ${name} of ${companyName}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ status: "success", message: "Email sent successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Error sending email", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
