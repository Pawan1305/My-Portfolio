// server.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS if your frontend is on a different domain
// Route to handle email sending
app.post('/api/send', async (req, res) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'pawan.punnu.k@gmail.com',
      subject: 'New Contact Form Submission',
      html: `<p><strong>Name:</strong> ${req.body.name}</p>
             <p><strong>Email:</strong> ${req.body.email}</p>
             <p><strong>Message:</strong><br>${req.body.message}</p>`
    });
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

const PORT = process.env.PORT || 3033;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
