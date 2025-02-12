require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name) {
    res.status(400).json({ message: "Please provide a valid Name", error });
  }
  if (!email) {
    res.status(400).json({ message: "Please provide a valid Email", error });
  }
  if (!message) {
    res.status(400).json({ message: "Message filed can't be empty!", error });
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
      from: email,
      to: "devendrareddy7733@gmail.com",
      subject: `Message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error sending email", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
