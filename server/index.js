require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { groq } = require('@ai-sdk/groq');
const { generateText } = require('ai');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

// Groq AI generate email endpoint
app.post('/api/generate-email', async (req, res) => {
  const { prompt } = req.body;
  try {
    const { text } = await generateText({
      model: groq('llama-3.3-70b-versatile'),
      prompt: prompt,
      apiKey: process.env.GROQ_API_KEY,
    });
    res.json({ email: text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'AI generation failed' });
  }
});

// Send email endpoint
app.post('/api/send-email', async (req, res) => {
  const { recipients, emailContent, subject } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: recipients.join(','),
    subject: subject || 'AI Generated Email',
    text: emailContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Email sending failed' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
